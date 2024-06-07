/* Header */
.header-section {
  @apply w-full;
}

.section-container {
  @apply max-w-[1440px];
  @apply w-full;
  @apply mx-auto;
}

.navbar {
  @apply max-w-[1407px];
  @apply w-full;
  @apply flex;
  @apply pt-1;
  @apply pb-2;
}
.navbar-box {
  @apply flex;
  // @apply justify-center;
  // @apply items-center;
}

.logo {
  @apply block;
  @apply w-full;
  @apply h-full;
}

.logo img {
  @apply w-[162px];
}

.nav-menu {
  @apply flex items-center;
}

.nav-menu li {
  @apply ml-[47px];
  @apply w-max;
}

.nav-menu li a {
  @apply text-[20px];
  @apply leading-[26px];
  @apply font-medium;
  @apply tracking-wide;
  @apply text-[#221E1F];
  @apply cursor-pointer;
}
.search-box {
  @apply ml-[43px];
  // @apply inline-block;
  // @apply w-full;
  // img {
  //   @apply w-[27px];
  //   @apply h-[18px];
  // };
}
// banner
.banner-section {
  @apply w-full;
}
.banner-container {
  @apply bg-[url('/assets/img3.png')];
  @apply bg-no-repeat;
  @apply bg-cover;
  @apply w-full;
  @apply mx-auto;

  @apply pt-[288px];
  @apply pb-[130px];
  .banner-content {
    @apply bg-[url('/assets/ellipse.png')];
    @apply bg-no-repeat;
    @apply bg-cover;
    @apply max-w-[633px];
    @apply w-full;
    @apply ps-[59px];
    @apply py-[54px];
    @apply bg-blend-screen;
    h1 {
      @apply text-[90px];
      @apply leading-[96px];
      @apply font-normal;
      @apply text-[#FFFFFF];
    }
    h2 {
      @apply text-[36px];
      @apply leading-[42px];
      @apply text-[#fff];
    }
    .appoint-btn {
      @apply py-2;
      @apply px-4;
      @apply bg-[#007AC3];
      @apply inline-flex;
      @apply items-center;
      @apply mt-7;
      @apply cursor-pointer;
      img {
        @apply w-[12px];
        @apply h-[12px];
        @apply ms-[20px];
      }
    }
  }
}
.appoint-btn p {
  @apply relative;
  @apply text-[22px];
  @apply leading-[28px];
  @apply tracking-wide;
  @apply text-[#ffff];
  @apply mt-1;
}
.appoint-btn p::after {
  @apply content-[''];
  @apply absolute;
  @apply block;
  @apply w-[1px];
  @apply h-[25px];
  @apply bg-[#fff4];
  @apply top-[50%];
  @apply -translate-y-1/2;
  @apply -right-3;
  @apply bottom-0;
}
.contact-container {
  @apply max-w-[1096px];
  @apply w-full;
  @apply flex;
  @apply justify-between;
  @apply px-[54px];
  @apply py-[29px];
  @apply bg-[#007AC3];
}
// about
.about-section {
  @apply w-full;
}

.about {
  @apply bg-[url('/assets/img6.png')];
  @apply bg-no-repeat;
  @apply bg-cover;
  @apply relative;
  @apply w-full;
  @apply pt-[110px];
  @apply pb-[63px];
  @apply pl-[61px];
  @apply pr-[40px];
}

.about-layer {
  @apply absolute;
  @apply w-full;
  @apply top-0;
  @apply bg-[#C4C4C4];
  @apply opacity-[0.6];
}
.about-content {
  @apply flex;
  @apply w-full;
  @apply gap-[30px];

  .left {
    @apply w-[50%];
  }

  .right {
    @apply w-[50%];
    @apply pl-[54px];
    @apply pt-[30px];
    @apply pr-[40px];
    span {
      @apply text-[20px];
      @apply leading-[26px];
      @apply font-semibold;
      @apply tracking-wide;
      @apply font-["Barlow"];
      @apply uppercase;
      @apply text-[#333333];
    }
    h4 {
      @apply text-[48px];
      @apply leading-[54px];
      @apply font-normal;
      @apply text-[#007AC3];
      @apply border-b-[11px];
      @apply table;
      @apply border-[#007AC3];
    }
    strong {
      @apply block;
      @apply text-[30px];
      @apply leading-[46px];
      @apply font-normal;
      @apply tracking-wide;
      @apply font-["Barlow"];
      @apply text-[#221E1F];
      @apply mt-[30px];
    }
    .about-para {
      @apply text-[20px];
      @apply leading-[30px];
      @apply font-[500];
      @apply font-["Barlow"];
      @apply text-[#221E1F];
      @apply mt-[30px];
      @apply pr-[30px];
    }
  }
}

.about-img {
  @apply relative;
  @apply max-w-[675px];
  @apply w-full;
  @apply h-full;
  @apply inline-block;
}

.about-img img:nth-child(1) {
  @apply relative;
  @apply w-[623px];
  @apply object-cover;
  // float: left;
}

.about-img img:nth-child(2) {
  @apply w-[562px];
  @apply object-cover;
  @apply float-right;
  @apply mt-6;
}

.about-img::before {
  @apply content-[''];
  @apply bg-[url('/assets/l1.png')];
  @apply absolute;
  @apply -top-2;
  @apply -left-2;
  @apply block;
  @apply w-[213px];
  @apply h-[234px];
  @apply z-10;
}
.about-img::after {
  @apply content-[''];
  @apply bg-[url('/assets/l2.png')];
  @apply absolute;
  @apply -bottom-2;
  @apply -right-2;

  @apply block;
  @apply w-[213px];
  @apply h-[266px];
  @apply z-10;
}
// Service
.service-section {
  @apply w-full;
}

.service {
  @apply relative;
  @apply bg-[url('/assets/s1.png')];
  @apply bg-no-repeat;
  @apply bg-cover;
  @apply w-full;

  @apply pt-[57px];
  @apply pb-[68px];
  @apply pl-[66px];
  @apply pr-[60px];
  h4 {
    @apply text-[48px];
    @apply leading-[54px];
    @apply font-normal;
    @apply text-[#007AC3];
    @apply border-b-[11px];
    @apply table;
    @apply border-[#007AC3];
  }
  strong {
    @apply text-[30px];
    @apply leading-[46px];
    @apply font-medium;
    @apply text-[#000000];
    @apply mr-[245px];
    @apply mt-[30px];
    @apply block;
  }
}

.service-layer {
  @apply absolute;
  @apply w-full;
  @apply top-0;
  @apply bg-[#C4C4C4];
  @apply opacity-[0.6];
}

.service-content {
  @apply grid;
  @apply grid-cols-4;
  @apply gap-8;
  @apply w-full;
  @apply mx-auto;
  @apply mt-[50px];
  .col {
    @apply relative;
  }
  .col img {
    @apply w-[299px];
    @apply object-cover;
  }
  .col a {
    @apply text-[30px];
    @apply leading-[36px];
    @apply font-medium;
    @apply text-[#007AC3];
    @apply mt-[16px];
    @apply block;
    @apply cursor-pointer;
    @apply transition-all duration-500 ease-in-out;
    &::hover {
      @apply opacity-60;
    }
  }
}
.img-hover {
  @apply absolute;
  @apply -top-2;
  @apply -left-2;
  @apply hidden;
  @apply transition-all duration-500 ease-in-out;

  img {
    @apply max-w-[145px];
    @apply w-full;
  }
}
.col:hover .img-hover {
  @apply block;
}
.btn {
  @apply py-2;
  @apply px-4;
  @apply bg-[#007AC3];
  @apply inline-flex;
  @apply items-center;
  @apply cursor-pointer;
  @apply mx-auto;

  img {
    @apply w-[12px];
    @apply h-[12px];
    @apply ms-[20px];
  }
}

.btn p {
  @apply relative;
  @apply text-[22px];
  @apply leading-[28px];
  @apply tracking-wider;
  @apply text-[#ffff];
  // @apply mt-1;
}
.btn p::after {
  @apply content-[''];
  @apply absolute;
  @apply block;
  @apply w-[1px];
  @apply h-[25px];
  @apply bg-[#fff4];
  @apply top-[50%];
  @apply -translate-y-1/2;
  @apply -right-3;
  @apply bottom-0;
}
.botton-row {
  @apply w-full;
  @apply text-center;
  @apply mx-auto;
  @apply mt-[84px];
}
.button-box {
  @apply block;
}
.button-container {
  @apply mt-[45px];
  @apply block;
}
.button-container .btn {
  @apply py-2;
  @apply px-4;
  @apply bg-[#007AC3];
  @apply inline-flex;
  @apply items-center;
  @apply cursor-pointer;

  img {
    @apply w-[12px];
    @apply h-[12px];
    @apply ms-[20px];
  }
}
# NgWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
