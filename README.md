# React Redux ile Modal Açma Ürün Ekleme Güncelleme be Silme
- Bu projede redux yapısı le bir modal oluşturup ürün ekleme ürünü güncelleme ve silme işlemlerini gerçekleştirdik.
- Ayrıca sırala ve arama işlevleride bulunmaktadır.


# kütüphaneler
- yarn add axios
- nativewind
yarn add nativewind
yarn add --dev tailwindcss@3.3.2
 dependence lari ve config dosyaları eklenmeli


 1- Bir dosya npx tailwindcss initoluşturmak için çalıştırıntailwind.config.js

tailwind.config.js dosyanızdaki tüm bileşen dosyalarınıza giden yolları ekleyin.

// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
2- Değiştirin 
babel.config.js

// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
+ plugins: ["nativewind/babel"],
};

- yarn add @reduxjs/toolkit
- yarn add react-redux
- yarn add @react-navigation/native
- yarn add react-native-screens react-native-safe-area-context
- yarn add @react-navigation/native-stack
- yarn add @react-navigation/bottom-tabs
- yarn add react-native-linear-gradient
- yarn add react-native-snap-carousel
- yarn add react-native-vector-icons
   eklenti ve ayarları sitesinden alınıp yapılacak.