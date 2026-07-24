# Alzen — Android ilova loyihasi

Bu papka to'liq tayyor **Android Studio loyihasi**. Ichida "Xizmat itlari haqida"
sayti offline holda WebView orqali ishlaydigan qilib joylashtirilgan
(`app/src/main/assets/www/index.html` — asosiy fayl, qolgan barcha fayllar
o'sha `assets/www` papkasi ichida saqlangan).

- **Logotip / splash screen**: "Men haqida/men haqimda.png" rasmidan olingan
- **App nomi**: Alzen
- **Offline**: ha, barcha HTML/CSS/JS/rasm fayllar ilova ichiga (assets) joylashtirilgan,
  internetsiz ham ochiladi. (Faqat "Xizmat itlari turlari" bo'limidagi ba'zi it
  rasmlari — Doberman, Labrador, Cane Corso, Rottweiler, Akita, Bloodhound,
  Belgiyalik Malinua, Nemis ovcharkasi — asl saytda internetdan (Wikimedia/Pinimg)
  olingan edi, shuning uchun ular faqat internet mavjud bo'lganda ko'rinadi;
  qolgan hammasi to'liq offline.)

## VARIANT A: GitHub orqali (kompyuter zaif bo'lsa — tavsiya etiladi, hech narsa o'rnatilmaydi)

Bu loyihada tayyor `.github/workflows/build-apk.yml` fayli bor — u APK'ni
GitHub'ning o'z bepul serverida yig'ib beradi. Sizga faqat brauzer kerak.

1. https://github.com ga kiring, bepul akkaunt oching (agar yo'q bo'lsa)
2. Yangi repository yarating: **+** (yuqori o'ngda) → **New repository** →
   nomini kiriting (masalan `alzen-app`) → **Public** tanlang → **Create repository**
3. Ochilgan sahifada **"uploading an existing file"** havolasini bosing
4. Kompyuteringizdagi shu `AlzenApp` papkasi ichidagi **barcha fayl va
   papkalarni** (README.md, app, gradle, build.gradle, settings.gradle,
   gradle.properties va **.github** papkasi ham) tanlab, sudrab tashlang
   (drag & drop) — yoki "choose your files" orqali tanlang
5. Pastda **Commit changes** tugmasini bosing (yuklash bir necha daqiqa vaqt olishi mumkin, chunki ichida rasm fayllar bor)
6. Yuqoridagi **Actions** bo'limiga o'ting
7. Chap tomondan **"Build Alzen APK"** workflow'ni tanlang → o'ng tomondan
   **"Run workflow"** tugmasini bosing → yana **Run workflow** (tasdiqlash)
8. ~3-5 daqiqa kuting (yashil ✅ belgi chiqquncha)
9. Tugagan workflow'ni bosing → pastda **Artifacts** qismida **Alzen-apk**
   nomli faylni yuklab oling — ichida tayyor `.apk` bor
10. Shu apk faylni telefoningizga o'tkazib o'rnating

**Muhim:** repository **Public** bo'lishi kerak — shunda GitHub Actions
butunlay bepul va cheklovsiz ishlaydi.

## VARIANT B: Android Studio orqali (agar kompyuter yetarli bo'lsa)

1. **Android Studio**ni o'rnating: https://developer.android.com/studio
   (agar hali o'rnatilmagan bo'lsa)
2. Android Studio’ni oching → **Open** → shu `AlzenApp` papkasini tanlang
3. Android Studio "Gradle wrapper topilmadi, standart wrapper qo'shilsinmi?"
   degan oyna chiqarsa — **OK / Yes** bosing (bu avtomatik tuzatiladi,
   internet aloqasi kerak bo'ladi, chunki Gradle birinchi marta yuklab olinadi)
4. Gradle sinxronizatsiyasi tugashini kuting (pastda progress bar ko'rasiz)
5. Yuqoridagi menyudan **Build → Build App Bundle(s) / APK(s) → Build APK(s)**
   ni bosing
6. Tugagach pastda chiqadigan bildirishnomadan **"locate"** ni bosing —
   tayyor `app-debug.apk` fayli shu yerda: `app/build/outputs/apk/debug/`
7. Shu `.apk` faylni telefoningizga o'tkazib, o'rnating (noma'lum manbalardan
   o'rnatishga ruxsat berish kerak bo'lishi mumkin)

## Play Store uchun signed APK (ixtiyoriy)

Agar do'konga chiqarmoqchi bo'lsangiz, **Build → Generate Signed Bundle / APK**
orqali o'z kalitingiz (keystore) bilan imzolangan versiyasini yasashingiz kerak.

## Loyiha tuzilishi

```
AlzenApp/
├── app/
│   ├── src/main/
│   │   ├── java/com/alzen/app/MainActivity.java   ← WebView logikasi
│   │   ├── res/                                    ← ikonkalar, splash, ranglar
│   │   ├── assets/www/                             ← sizning butun saytingiz
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── build.gradle
└── settings.gradle
```
