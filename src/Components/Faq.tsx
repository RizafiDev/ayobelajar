import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

function Faq() {
  return (
    // Section FAQ dengan role region dan aria-label untuk konteks yang jelas
    <section
      id="faq"
      className="container flex flex-col gap-12 items-center justify-center w-full mx-auto px-6 md:px-28 text-textblack py-16"
      role="region"
      aria-label="Pertanyaan yang sering muncul tentang BelajarYuk"
    >
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="header w-full items-center text-center flex flex-col gap-4"
      >
        {/* Heading utama, pakai h2 jika sudah ada h1 di halaman */}
        <h2 className="text-4xl font-bold">Pertanyaan yang sering muncul</h2>
      </div>

      <div className="faq-wrapper w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            {/* AccordionTrigger sudah sebagai tombol yang accessible */}
            <AccordionTrigger>Apa itu BelajarYuk!?</AccordionTrigger>
            <AccordionContent>
              BelajarYuk! adalah platform belajar online yang menyediakan
              berbagai kelas interaktif untuk pelajar, mahasiswa, dan
              profesional. Kamu bisa belajar kapan pun dan di mana pun.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Apakah semua kelas di BelajarYuk! gratis?
            </AccordionTrigger>
            <AccordionContent>
              Sebagian kelas tersedia secara gratis, namun ada juga kelas
              premium yang memerlukan pembayaran. Kamu bisa memilih sesuai
              kebutuhan dan anggaranmu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Apakah saya akan mendapat sertifikat setelah menyelesaikan kelas?
            </AccordionTrigger>
            <AccordionContent>
              Ya, kamu akan mendapatkan sertifikat digital setelah menyelesaikan
              kelas dan memenuhi semua syarat yang ditentukan, seperti
              menyelesaikan materi dan tugas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Bagaimana cara mendaftar dan mulai belajar?
            </AccordionTrigger>
            <AccordionContent>
              Kamu hanya perlu membuat akun di BelajarYuk!, memilih kelas yang
              kamu minati, lalu langsung bisa mulai belajar. Untuk kelas
              berbayar, kamu akan diarahkan ke halaman pembayaran terlebih
              dahulu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Apakah saya bisa belajar lewat HP atau harus pakai laptop?
            </AccordionTrigger>
            <AccordionContent>
              Tentu saja! BelajarYuk! bisa diakses melalui berbagai perangkat,
              termasuk HP, tablet, maupun laptop. Kamu bisa belajar dengan
              nyaman kapan saja dan di mana saja.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
