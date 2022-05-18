<template>
  <div>
    <div class="bg_img fw-bold" style="color: white; font-size: 45px">
      Tashkent Axboroto Texnologiyalari Universiteti
    </div>
    <div class="container d-flex justify-content-md-between mt-5 flex-column">
      <div class="d-flex justify-content-md-around w-100 flex-wrap">
        <div class="d-flex flex-wrap w-100 wrap__item">
          <div
            class="col-1 d-flex justify-content-sm-center justify-content-md-start px-2 py-3"
          >
            <i
              class="fa-solid fa-users"
              style="font-size: 40px; color: #de5750"
            ></i>
          </div>
          <div class="col-4">
            <h4
              class="py-2 fw-bold"
              style="
                font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial,
                  sans-serif;
              "
            >
              {{ $t("student_enrollment") }}
            </h4>
            <p class="py-2">
              <span class="fw-bold" style="color: #de5750"> 7,645 </span
              >{{ $t("undergraduate") }}
            </p>
            <span class="py-2"
              ><span style="color: #de5750" class="fw-bold"> 9,292 </span>
              {{ $t("graduate") }}</span
            >
            <p class="py-2">{{ $t("situation") }}</p>
          </div>
          <div class="col-4 library">
            <h2 class="py-2">{{ $t("library_data") }}</h2>

            <ul class="px-4">
              <li>{{ $t("scientific_literature") }} 26660</li>
              <li>{{ $t("name_") }}/116709 {{ $t("copy") }};</li>
              <li>
                {{ $t("textbooks") }} 1542 {{ $t("name_") }}/40096
                {{ $t("copy") }};
              </li>
              <li>
                {{ $t("tutorials") }} 4822 {{ $t("name_") }}/166532
                {{ $t("copy") }};
              </li>
              <li>
                {{ $t("fiction") }} 11461 {{ $t("name_") }}/17407
                {{ $t("copy") }}
              </li>
            </ul>
          </div>
          <div class="col-3 img" style="padding: 20px">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
        <!-- 2 -->
        <div class="d-flex flex-wrap w-100 wrap__item">
          <div
            class="col-1 d-flex justify-content-sm-center justify-content-md-start px-2 py-3"
          >
            <i
              class="fa-solid fa-graduation-cap"
              style="font-size: 45px; color: #53284f"
            ></i>
          </div>
          <div class="col-4">
            <h4
              class="py-2 fw-bold"
              style="
                font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial,
                  sans-serif;
              "
            >
              {{ $t("faculty") }}
            </h4>
            <p class="py-2">
              <span class="fw-bold" style="color: #de5750"> 9 </span>
              {{ $t("faculty") }}
            </p>
            <span class="py-2"
              ><span style="color: #de5750" class="fw-bold"> 2288 </span>
              {{ $t("professor") }}</span
            >
            <p class="py-2">5:1 {{ $t("ratio") }}</p>
          </div>
          <div class="col-4 library">
            <h2 class="py-2">TATU</h2>

            <ul class="px-4">
              <li>{{ $t("tatu_info") }}</li>
              <li>{{ $t("tatu_info_2003") }}</li>
              <li>
                {{ $t("tatu_info_2005") }}
              </li>

              <li>
                {{ $t("tatu_info_2017") }}
              </li>
            </ul>
          </div>
          <div class="col-3 img" style="padding: 20px">
            <img
              alt="No "
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 596px) {
  .wrap__item {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .library {
    width: 100%;
    text-align: center;
  }
  .img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.bg_img {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("../assets/library.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
