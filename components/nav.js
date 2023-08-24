const navbar=()=>{
    return ` <header class="navbar navbar-expand-lg hedaer-bg">
    <div class="container">
        <a class="navbar-brand text-primary fw-bold fs-4 my-3" href="#"><img src="img/icon.png" alt=""
                class="col-3 p-1"><span class="text-white">Bheeshma</span></a>
        <button class="navbar-toggler border-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#dropdown">
            <i class="bi bi-list text-white fs-3 navbar-toggler-icon"></i>
        </button>
        <nav class="collapse navbar-collapse text-center " id="dropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item fw-semibold pe-2 h6"><a href="index.html"
                        class="nav-link text-primary text-uppercase">home+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="ui.html"
                        class="nav-link text-white text-uppercase">UI+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="cart.html"
                        class="nav-link text-white text-uppercase">CART+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="about.html"
                        class="nav-link text-white text-uppercase">about+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="shop.html"
                        class="nav-link text-white text-uppercase">shop+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="news.html"
                        class="nav-link text-white text-uppercase">news+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="history.html"
                        class="nav-link text-white text-uppercase">history+</a>
                </li>
                <li class="nav-item fw-semibold pe-2 h6"><a href="contact.html"
                        class="nav-link text-white text-uppercase">contact+</a>
                </li>
            </ul>
            <button class="btn btn-primary rounded-0 py-3 px-3 text-uppercase fw-semibold">get a
                quote</button>
        </nav>
        <div class="row  justify-content-center mx-auto">
            <button class="btn btn-success btn-56 rounded-0 py-3 px-3" data-bs-toggle="collapse"
                data-bs-target="#search"><i class="bi bi-search  fw-bold"></i></button>
            <button class="btn btn-success btn-56 rounded-0 py-2 px-2" id="liveAlertBtn">
            <a href="../sign_up.html"><i
            class="bi bi-person p-1 fs-4 fw-bold"></i></a>
            </button>
            <button class="btn btn-success btn-56 rounded-0 py-2 px-2 position-relative" data-bs-toggle="offcanvas"
                data-bs-target="#launch-offcanvas"><i class="bi bi-cart fs-4 fw-bold"></i><span
                    class="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-primary">2</span></button>
        </div>
    </div>
</header>`
}


export default navbar;