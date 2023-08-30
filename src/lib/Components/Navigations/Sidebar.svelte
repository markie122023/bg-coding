<nav class="sidebar sidebar-offcanvas" >
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="/dashboard">
        <i class="icon-grid menu-icon" />
        <span class="menu-title">Dashboard</span>
      </a>
    </li>
   
    <li class="nav-item">
      <a
        class="nav-link"
        data-toggle="collapse"
        href="#form-elements"
        aria-expanded="false"
        aria-controls="form-elements"
      >
        <i class="icon-columns menu-icon" />
        <span class="menu-title">Learning</span>
        <i class="menu-arrow" />
      </a>
      <div class="collapse" id="form-elements">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item">
            <a class="nav-link" href="/level">All Learning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/my_courses">My Courses</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">
        <i class="icon-command menu-icon" />
        <span class="menu-title">Challenge</span>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        data-toggle="collapse"
        href="/"
        aria-expanded="false"
        aria-controls="games"
      >
        <i class="icon-gamepad menu-icon" />
        <span class="menu-title">Games</span>
        
      </a>
     
    </li>
  </ul>
</nav>

<style>
  #sidebar {
    background-image: url("images/svg/js.svg"), url("images/svg/node.svg"),
      url("images/svg/python.svg"), url("images/svg/linux.svg");
    background-position: left top, right top, left bottom, right bottom;
    background-size: 70px;
    background-repeat: no-repeat;
  }
</style>
