import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = [
    {
      src: "1",
      detail: "Bucket Wisuda"
    },
    {
      src: "4",
      detail: "Money Bucket"
    },
    {
      src: "7",
      detail: "Money Birthday Cake"
    },
  ];

  return (
    <section class="page-section portfolio" id="portfolio">
      <div class="container">

        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Koleksi</h2>

        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>

        <div class="row justify-content-center">
          {
            menu.map(({ src, detail }) => <MenuItem src={`img/${src}.jpg`} detail={detail} key={src} />)
          }
        </div>
      </div>
    </section>
  );
}

export default Menu;