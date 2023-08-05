<nav class="sidebar sidebar-offcanvas" >
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="/dashboard">
        <i class="icon-grid menu-icon" />
        <span class="menu-title">Dashboard</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/level">
        <i class="icon-command menu-icon" />
        <span class="menu-title">Learning</span>
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
        <span class="menu-title">Challenge</span>
        <i class="menu-arrow" />
      </a>
      <div class="collapse" id="form-elements">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item">
            <a class="nav-link" href="#">Payment Resolution</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="withdrawal">Withdrawal Request</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        data-toggle="collapse"
        href="#questions"
        aria-expanded="false"
        aria-controls="questions"
      >
        <i class="icon-gamepad menu-icon" />
        <span class="menu-title">Games</span>
        <i class="menu-arrow" />
      </a>
      <div class="collapse" id="questions">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item">
            <a class="nav-link" href="#">Configuration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/skill_practice">Skill Practice</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Past Questions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Issue Questions</a>
          </li>
        </ul>
      </div>
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
