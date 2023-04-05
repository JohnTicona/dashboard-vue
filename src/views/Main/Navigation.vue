<script setup>

</script>

<template>
  <nav class="shadow-sm col-12 p-2">
    <div class="nav justify-content-end  justify-content-between">
      <div class="col-4">
        <li class="nav-item">
          <input type="text" class="form-control" placeholder="Type here to search" />
        </li>
      </div>
      <div class="d-flex col-3">
        <li class="nav-item">
          <i class="bi bi-grid-3x3-gap-fill btn btn-lg"></i>
        </li>
        <li class=" nav-item ">
          <i class=" bi bi-chat-left-dots-fill  btn btn-lg" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"></i>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                <h5>Messages</h5>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <div class="profile">
                  <img src="../../img/perfil.jpg" alt="imagen hombre" />
                  <strong>Mark Zuckerberg</strong><br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing el
                </div>
              </a>
            </li>
            <li><a class="dropdown-item" href="#">
                <div class="profile">
                  <img src="../../img/perfil.jpg" alt="imagen hombre" />
                  <strong>Mark Zuckerberg</strong><br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing el
                </div>
              </a></li>
            <li>
              <a class="dropdown-item" href="#">
                <div class="profile">
                  <img src="../../img/perfil.jpg" alt="imagen hombre" />
                  <strong>Mark Zuckerberg</strong><br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing el
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item text-center" href="#"> View all messages</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <i class="bi bi-bell-fill btn btn-lg "></i>
        </li>
        <li class="nav-item">
          <div class="profile" style="padding-left: 20px;">
            <img src="../../img/perfil.jpg" alt="imagen hombre" />
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.profile img {

  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;

}
</style>