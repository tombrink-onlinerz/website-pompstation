/* Pompstation — formulierverzending.
   Eén verzendpunt voor alle formulieren op de site. De inzending gaat naar de
   n8n-webhook, die de mail naar events@pompstation.nu stuurt, de aanvrager een
   bevestiging mailt, het contact in Brevo zet en een regel in de Google Sheet logt.

   Workflow: "Pompstation — formulieren naar events@pompstation.nu"
   De payload is platte JSON met de veldlabels als sleutels.

   Testen vóór publicatie: zet endpoint op de /webhook-test/-variant en klik in n8n op
   "Execute workflow". Voor live moet de workflow in n8n actief staan. */

window.PS_FORM = {
  endpoint: 'https://onlinerz.n8p1.hostingsecure.com/webhook/pompstation-formulier',
  to: 'events@pompstation.nu',
};

(function () {
  var LABEL_CLEAN = /\s*\*\s*$|\s*\(optioneel\)\s*/gi;

  function labelFor(el) {
    var box = el.closest('div');
    var lab = box && box.querySelector('label');
    var txt = lab ? lab.textContent : '';
    if (!txt && el.name) txt = el.name;
    return txt.replace(/\s+/g, ' ').trim();
  }

  function fieldName(el) {
    return labelFor(el).replace(LABEL_CLEAN, '').trim() || el.type;
  }

  function isOptional(el) {
    var l = labelFor(el).toLowerCase();
    return l.indexOf('optioneel') !== -1;
  }

  function fields(form) {
    return Array.prototype.filter.call(
      form.querySelectorAll('input, select, textarea'),
      function (el) { return el.type !== 'submit' && el.type !== 'button' && el.type !== 'range'; }
    );
  }

  function mark(el, bad) {
    el.style.borderColor = bad ? '#C0392B' : '';
    el.setAttribute('aria-invalid', bad ? 'true' : 'false');
  }

  function message(form, text, isError) {
    var box = form.querySelector('[data-ps-formmsg]');
    if (!box) {
      box = document.createElement('p');
      box.setAttribute('data-ps-formmsg', '');
      box.setAttribute('role', 'status');
      box.style.cssText = 'margin:16px 0 0;font-family:\'JetBrains Mono\',monospace;font-size:13px;line-height:1.6';
      form.appendChild(box);
    }
    box.textContent = text || '';
    box.style.color = isError ? '#C0392B' : 'inherit';
    box.style.display = text ? 'block' : 'none';
  }

  function collect(form, meta) {
    var data = {};
    var missing = [];
    var els = fields(form);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = fieldName(el);
      if (el.type === 'checkbox') {
        if (key.length > 40 || /privacy/i.test(key)) key = 'Akkoord privacyverklaring';
        if (!el.checked) missing.push('akkoord met de privacyverklaring');
        mark(el, !el.checked);
        data[key] = el.checked ? 'ja' : 'nee';
        continue;
      }
      var val = (el.value || '').trim();
      var bad = false;
      if (!val && !isOptional(el)) { bad = true; missing.push(key); }
      if (val && el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
        bad = true; missing.push(key + ' (geen geldig e-mailadres)');
      }
      mark(el, bad);
      if (val) data[key] = val;
    }
    if (meta && meta.extra) {
      for (var k in meta.extra) if (meta.extra[k] != null && meta.extra[k] !== '') data[k] = String(meta.extra[k]);
    }
    return { data: data, missing: missing };
  }

  window.psSend = function (form, meta) {
    meta = meta || {};
    var res = collect(form, meta);
    if (res.missing.length) {
      message(form, 'Vul de volgende velden in: ' + res.missing.join(', ').replace(/\.$/, '') + '.', true);
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return Promise.reject(new Error('incomplete'));
    }
    if (!window.PS_FORM.endpoint) {
      message(form, 'Het formulier is nog niet gekoppeld aan een verzendadres. Mail ons op ' + window.PS_FORM.to + ' of bel 020 227 9885.', true);
      return Promise.reject(new Error('no-endpoint'));
    }

    var btn = form.querySelector('button[type="submit"]');
    var btnText = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; btn.style.cursor = 'wait'; btn.textContent = 'Versturen…'; }
    message(form, '', false);

    var payload = Object.assign({
      subject: meta.subject || 'Nieuwe aanvraag via pompstation.nu',
      from_name: 'pompstation.nu',
      replyto: res.data['E-mail'] || res.data['E-mailadres'] || '',
      Formulier: meta.name || 'Website',
      Pagina: location.pathname.replace(/^\//, '') || 'index.html',
      Verzonden: new Date().toLocaleString('nl-NL'),
      botcheck: false,
    }, res.data);

    return fetch(window.PS_FORM.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.json().catch(function () { return { success: r.ok }; }); })
      .then(function (json) {
        if (!json || json.success === false) throw new Error((json && json.message) || 'Verzenden mislukt');
        if (window.dataLayer) window.dataLayer.push({ event: 'form_submit', form_name: meta.name || 'Website' });
        if (meta.redirect) { location.href = meta.redirect; return true; }
        return true;
      })
      .catch(function (err) {
        if (btn) { btn.disabled = false; btn.style.opacity = ''; btn.style.cursor = ''; btn.textContent = btnText; }
        message(form, 'Verzenden is niet gelukt. Probeer het opnieuw of mail ons op ' + window.PS_FORM.to + '.', true);
        throw err;
      });
  };
})();
