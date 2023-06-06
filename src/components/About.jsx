const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="ms-auto"><p className="lead">Gozales's Craft merupakan UMKM yang menghadirkan kerajinan unik dalam bentuk bucket wisuda dan kue yang terbuat dari uang asli. Dengan kreativitas dan keahlian tinggi, mereka mengubah uang menjadi karya seni yang memukau. Setiap bucket wisuda dan kue yang mereka buat tidak hanya memiliki nilai materi, tetapi juga memberikan pesan tentang penghargaan terhadap perjuangan dan prestasi. Dengan menjaga kualitas dan detail yang cermat, Gozales's Craft menciptakan produk berkualitas tinggi yang menjadi pilihan kado yang berkesan dan memiliki makna mendalam. Mereka dengan penuh dedikasi terus berinovasi untuk menciptakan kerajinan tangan yang personal dan menyentuh hati. Gozales's Craft, tempat Anda menemukan kerajinan yang tidak biasa dan menyentuh jiwa dengan keindahannya.</p></div>
        </div>

        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="https://maps.app.goo.gl/gXA3A1WPq5JJNYcz7" rel="noreferrer" target="_blank">
            Pesan Sekarang!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;