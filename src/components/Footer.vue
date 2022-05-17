<template>
  <div class="footer">
    <div class="contact">
      <p>{{ $t("contact") }}</p>
      <div class="networks">
        <a href="https://www.facebook.com/hasan.sirojiddinov.1"
          ><i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="mailto:sirojiddinovkhasan@gmail.com"
          ><i class="fa-brands fa-google"></i
        ></a>
        <a href="https://telegram.me/I_Khasan">
          <i class="fa-brands fa-telegram"></i
        ></a>
        <a href="https://www.instagram.com/accounts/login/?next=/i_khasan/"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </div>
    </div>
    <div class="contact1">
      <div class="item1">
        <span>{{$t("contact1")}}</span>
        <ul>
          <li>
            <i class="fa-solid fa-house-chimney"></i>
            {{$t("location")}}
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            sirojiddinovkhasan@gmail.com
          </li>
          <li>
            <i class="fa-solid fa-phone-flip"></i>
            +998995656561
          </li>
        </ul>
      </div>
      <div class="item2">
        <span>{{$t("useful_links")}}</span>
        <ul>
          <li>
            <router-link to="/" class="router">{{ $t("home") }}</router-link>
          </li>
          <li>
            <router-link to="/" class="router"> {{ $t("news") }}</router-link>
          </li>
          <li>
            <router-link to="/about_library" class="router">{{
              $t("about_library")
            }}</router-link>
          </li>
          <li>
            <router-link to="/books" class="router">{{
              $t("books")
            }}</router-link>
          </li>
          <li>
            <router-link to="/" class="router">{{
              $t("libraries")
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="item1">
        <span>{{$t("library_links")}}</span>
        <ul>
          <li>
            <a
              href="https://libraries.mit.edu/"
              >{{ $t("MIT_Library") }}</a
            >
          </li>
          <li>
            <a href="https://library.harvard.edu/">{{ $t("Harvard") }}</a>
          </li>
          <li>
            <a href="https://www.natlib.uz/">{{ $t("Uzb") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer {
  width: 100%;
  height: 200px;
  background-color: #b1040e;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.footer .contact {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #db2f38;
}
.footer .contact p {
  color: #fff;
  margin-left: 15px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.3px;
}
.footer .contact .networks {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
}
.footer .contact .networks i {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}
.footer .contact1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
}
.footer .contact1 .item1 span {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
.footer .contact1 ul {
  display: flex;
  flex-direction: column;
}
.footer .contact1 ul li {
  list-style: none;
  color: #fff;
  font-size: 14px;
}
.footer .contact1 ul li a{
  list-style: none;
  color: #fff;
  text-decoration: none;
  font-family: "Roboto",sans-serif;
  font-size: 13px;
}
.footer .contact1 ul li a:hover{
       border-bottom: 1px solid;
}
.footer .contact1 .item1 ul li i {
  font-size: 16px;
}
.footer .contact1 .item2 span {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
.footer .contact1 .item2 .router {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  transition: all 0.5s linear;
}
.footer .contact1 .item2 .router:hover {
  border-bottom: 1px solid #fff;
}
</style>