import AppLayout from "../components/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <main className="page home">
        <section className="home-hero">
          <h1 className="home-title">Edify</h1>
          <p className="home-subtitle">
            Comprehensive form time activities — made by teachers for teachers.
          </p>
        </section>

        <section className="home-section">
          <h2 className="home-heading">Why Edify?</h2>
          <p className="home-body">
            Edify provides comprehensive form time activities for schools — made by teachers for teachers.
            Aligned with 12 core virtues, Edify delivers fully planned, ready-to-use form time resources,
            PowerPoint slides, and discussion prompts. Each session is designed to build students’ personal,
            interpersonal, and thinking skills while raising aspirations. Edify helps schools deliver consistent,
            high-quality pastoral provision that makes a lasting impact.
          </p>
        </section>

        <section className="home-section">
          <h2 className="home-heading">Edify 12 core virtues</h2>

          <figure className="virtues-figure">
            <img
              className="virtues-image"
              src="/images/virtues/edify-12-virtues.png"
              alt="Edify 12 core virtues wheel: Thinking, Personal, Interpersonal, Aspirational"
              loading="lazy"
            />
            <figcaption className="virtues-caption">
              The Edify framework supports thinking skills, personal character, interpersonal values, and aspiration.
            </figcaption>
          </figure>
        </section>
      </main>
    </AppLayout>
  );
}
