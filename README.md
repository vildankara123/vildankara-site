# Claude Code Handoff — Vildan Kara Kayacan Advisory Website

Bu paket, projeyi **başka bir bilgisayarda Claude Code ile** kaldığın yerden devam ettirmen için
hazırlandı.

## Nasıl başlarsın

1. Bu klasörü yeni laptopa kopyala / aç.
2. Terminalde `claude_code_handoff/` klasörünün içinde Claude Code'u başlat. Claude Code
   `CLAUDE.md` dosyasını otomatik okur — projenin nasıl çalıştığı orada yazılı.
3. Siteyi görmek için:

```bash
cd site
python3 -m http.server 8000
# tarayıcıda aç: http://localhost:8000/index.html
```

> `file://` ile değil, **HTTP üzerinden** aç — `.jsx` dosyaları tarayıcıda fetch edilip
> Babel ile derleniyor; `file://` bunu engeller.

## İçindekiler

- `CLAUDE.md` — Claude Code için proje rehberi (mimari, dosya haritası, kurallar). **İlk bunu okutur.**
- `site/` — sitenin tamamı (tüm sayfalar, JSX bölümleri, CSS, tokenlar, görseller, derlenmiş
  `_ds_bundle.js`).

## Notlar

- **Build / npm yok.** React + Babel tarayıcıda çalışıyor; sadece bir HTTP sunucusu yeter.
- Site **iki dilli (EN ⇄ TR)**. Tüm metinler `site/data.js` içinde, her iki dilde. Metin
  değiştirirken ikisini de güncelle.
- `_ds_bundle.js` **derlenmiş** çıktıdır — elle düzenleme. Bileşen kütüphanesini değiştirmek
  istersen orijinal tasarım-sistemi projesine ihtiyacın olur.
- Detaylı her şey `CLAUDE.md` içinde.
