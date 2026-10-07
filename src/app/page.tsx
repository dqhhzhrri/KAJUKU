"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Phone as WhatsApp, ChevronLeft, ChevronRight } from "lucide-react";

const pengurusData = {
   "2026": [ // coming soon
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2025": [
    { role: "Pembina", name: "Bunda", filename: "pembina" },
    { role: "Pengajar", name: "Sensei Anggi Nugrahani Arifyanti", filename: "pengajar" },
    { role: "Ketua", name: "MYRS Rayhan Refitrano", filename: "ketua" },
    { role: "Wakil Ketua ", name: "Kievo Rizki R.", filename: "wakil" },
    { role: "Divisi bendahara 1", name: "Shifwa Meidy G.", filename: "bendahara1" },
    { role: "Divisi bendahara 2", name: "Rafi Akbar S.", filename: "bendahara2" },
    { role: "Divisi sekretaris 1", name: "Ghania Ayla", filename: "sekretaris1" },
    { role: "Divisi sekretaris 2", name: "M. Yusuf Alfath", filename: "sekretaris2" },
    { role: "Divisi Humas 1", name: "Raihana Azalia S.", filename: "humas1" },
    { role: "Divisi Humas 2", name: "Revani Dian A.", filename: "humas2" },
    { role: "Divisi Lomba", name: "Malik Savero S.", filename: "lomba1" },
  ],
  "2024": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Rina Senpai", filename: "pengajar" },
    { role: "Ketua", name: "Darrel Kenzie Raissha Dayan", filename: "ketua" },
    { role: "Wakil", name: "M. Farras Novariadi", filename: "wakil" },
    { role: "Sekretaris 1", name: "Caroline R Marcelino", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Kievo Rizki Ramadhan Bramesta", filename: "sekretaris2" },
    { role: "Bendahara 1", name: "Rafi Akbar Sandyatama", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Christian Aquinno S.", filename: "bendahara2" },
    { role: "Humas 1", name: "MYRS Rayhan Refitrano", filename: "humas1" },
    { role: "Humas 2", name: "Ghania Ayla", filename: "humas2" },
    { role: "Lomba 1", name: "Praquitala Julian Abdillah", filename: "lomba1" },
  ],
  "2023": [
    { role: "Pembina", name: "Pak Reza", filename: "pembina" },
    { role: "Pengajar", name: "Rina Senpai", filename: "pengajar" },
    { role: "Ketua", name: "Nadia Diva Paradisa", filename: "ketua" },
    { role: "Wakil", name: "Nadya Shafwah", filename: "wakil" },
    { role: "Sekretaris 1", name: "Asti khoirunissa", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "D'Qhaizhar Ari Dhiaulhaq", filename: "sekretaris2" },
    { role: "Bendahara 1", name: "Tanisha Firyal Afarin", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Sasqia mutiara ramadani", filename: "bendahara2" },
    { role: "Humas 1", name: "Khalisa Rahma Mazaya", filename: "humas1" },
    { role: "Humas 2", name: "Maulana Sigit Sayekti", filename: "humas2" },
    { role: "Lomba 1", name: "M.Arya Yudhistira", filename: "lomba1" },
  ],
  "2022": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2021": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2020": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2019": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2018": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2017": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2016": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2015": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2014": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2013": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2012": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],
  "2011": [
    { role: "Pembina", name: "Bpk. Pembina", filename: "pembina" },
    { role: "Pengajar", name: "Ibu Pengajar", filename: "pengajar" },
    { role: "Ketua", name: "Nama Ketua", filename: "ketua" },
    { role: "Wakil", name: "Nama Wakil", filename: "wakil" },
    { role: "Sekretaris 1", name: "Sekre 1", filename: "sekretaris1" },
    { role: "Sekretaris 2", name: "Sekre 2", filename: "sekretaris" },
    { role: "Bendahara 1", name: "Benda 1", filename: "bendahara1" },
    { role: "Bendahara 2", name: "Benda 2", filename: "bendahara2" },
    { role: "Humas 1", name: "Humas 1", filename: "humas1" },
    { role: "Humas 2", name: "Humas 2", filename: "humas2" },
    { role: "Lomba 1", name: "Lomba 1", filename: "lomba1" },
    { role: "Lomba 2", name: "lomba 2", filename: "lomba2" },
  ],

};

const ScrollReveal = ({ children, className = "", delay = 0, type = "fade-up" }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.15 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let baseClass = "transition-all duration-1000 ease-out will-change-transform ";
  let hiddenClass = "opacity-0 ";
  let visibleClass = "opacity-100 ";

  if (type === "fade-up") {
    hiddenClass += "translate-y-16 scale-95";
    visibleClass += "translate-y-0 scale-100";
  } else if (type === "fade-left") {
    hiddenClass += "-translate-x-16";
    visibleClass += "translate-x-0";
  } else if (type === "fade-right") {
    hiddenClass += "translate-x-16";
    visibleClass += "translate-x-0";
  } else if (type === "zoom-in") {
    hiddenClass += "scale-75";
    visibleClass += "scale-100";
  }

  return (
    <div
      ref={domRef}
      className={`${className} ${baseClass} ${isVisible ? visibleClass : hiddenClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
};

const PengurusCard = ({ p, year, delay }: { p: any; year: string; delay: number }) => {
  // Kita buat state untuk menampung source gambar yang berhasil
  const [imgSrc, setImgSrc] = useState(`/Assets/${year}/${p.filename}.jpg`);

  return (
    <ScrollReveal type="fade-up" delay={delay} className="w-[140px] md:w-[160px]">
      <div className="flex flex-col items-center group">
        <p className="text-[9px] font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{p.role}</p>

        <div className="w-full aspect-[3/4] bg-white rounded-3xl border border-rose-100 shadow-lg group-hover:scale-105 transition-all duration-300 overflow-hidden mb-2">
          <img
            src={imgSrc}
            onError={() => {
              // Jika .jpg gagal, coba ganti ke .png
              if (imgSrc.endsWith(".jpg")) {
                setImgSrc(`/Assets/${year}/${p.filename}.png`);
              } else {
                // Jika .png juga gagal, baru tampilkan placeholder
                setImgSrc(`https://placehold.co/300x400/f472b6/ffffff?text=${encodeURIComponent(p.role)}`);
              }
            }}
            alt={p.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs font-bold text-gray-800 text-center">{p.name}</p>
      </div>
    </ScrollReveal>
  );
};

const History = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];
  const currentData = pengurusData[selectedYear as keyof typeof pengurusData] || [];
  const findRole = (role: string) => currentData.find((p: any) => p.role === role);

  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 py-20 w-full flex flex-col items-center">
      <ScrollReveal type="zoom-in" className="w-full max-w-5xl bg-rose-500 rounded-3xl p-6 shadow-2xl mb-16 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Perjalanan Kajuku</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {years.map((year) => (
            <button key={year} onClick={() => setSelectedYear(year)} className={`px-4 py-2 rounded-lg font-bold transition-all ${selectedYear === year ? "bg-white text-rose-500 shadow-lg scale-110" : "text-white/70 hover:bg-white/20"}`}>
              {year}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div key={selectedYear} className="w-full flex flex-col items-center">
        <h2 className="text-center text-rose-500 font-black text-3xl mb-12 uppercase tracking-widest">Pengurus Tahun {selectedYear}</h2>

        {/* HIRARKI UTAMA */}
        <div className="flex flex-col items-center mb-16 w-full">
          {findRole("Pembina") && <PengurusCard p={findRole("Pembina")} year={selectedYear} delay={100} />}
          <div className="h-8 w-1 bg-gray-200 my-2" />
          {findRole("Pengajar") && <PengurusCard p={findRole("Pengajar")} year={selectedYear} delay={200} />}
          <div className="flex gap-20 md:gap-40 my-2">
            <div className="h-8 w-1 bg-gray-200" />
            <div className="h-8 w-1 bg-gray-200" />
          </div>
          <div className="flex flex-row gap-8 md:gap-24">
            {findRole("Ketua") && <PengurusCard p={findRole("Ketua")} year={selectedYear} delay={300} />}
            {findRole("Wakil") && <PengurusCard p={findRole("Wakil")} year={selectedYear} delay={400} />}
          </div>
        </div>

        {/* STAF TAMBAHAN */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 justify-items-center w-full max-w-4xl">
          {currentData
            .filter((p: any) => !["Pembina", "Pengajar", "Ketua", "Wakil"].includes(p.role))
            .map((p: any, i: number) => (
              <PengurusCard key={i} p={p} year={selectedYear} delay={i * 50} />
            ))}
        </div>

        {/* --- INI BAGIAN FOTO BERSAMA YANG BARU --- */}
        <ScrollReveal type="fade-up" delay={500} className="w-full flex justify-center mt-12">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-4xl w-full">
            <h2 className="text-center text-gray-800 font-bold mb-4">Foto Bersama {selectedYear}</h2>
            
            <div className="w-full overflow-hidden rounded-2xl border-2 border-pink-100 shadow-inner">
              <img
                src={`/Assets/${selectedYear}/bersama.jpg`}
                alt={`Foto Bersama ${selectedYear}`}
                onError={(e: any) => {
                  if (e.target.src.endsWith(".jpg")) {
                    e.target.src = `/Assets/${selectedYear}/bersama.png`;
                  } else {
                    e.target.src = "https://placehold.co/1000x500/94a3b8/ffffff?text=FOTO+BERSAMA+TIDAK+DITEMUKAN";
                  }
                }}
                className="w-full aspect-[2/1] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </ScrollReveal>
        
      </div>
    </div>
  );
};
``
const CloudBackground = () => (
  <div
    className="fixed inset-0 -z-10 bg-pink-100 opacity-30 animate-pan-bg"
    style={{
      backgroundImage: 'url("/baground.png")',
      backgroundRepeat: "repeat",
      backgroundSize: "400px",
    }}
  />
);

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "history", label: "History" },
    { id: "achievement", label: "Achievement" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-rose-500/90 backdrop-blur-md shadow-lg py-1" : "bg-rose-500 py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => setCurrentPage("home")}>
            <img src="/logo_kajuku.png" alt="KAJUKU Logo" className="w-12 h-12 object-contain mr-2" />
            <img src="/logo_sekolah.png" alt="sman11 Logo" className="w-25 h-25 object-contain mr-2" />
            <span className="text-white font-bold tracking-widest hidden sm:block">KAJUKU</span>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => setCurrentPage(link.id)} className="font-semibold relative overflow-hidden group py-1 text-white">
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${currentPage === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href="https://gforms/..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-rose-500 px-5 py-2 rounded-full font-bold text-sm hover:bg-rose-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-block text-center"
            >
              Join us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-rose-600 transition-colors">
              {isOpen ? <X className="w-6 h-6 animate-spin-slow" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-rose-600 px-4 py-3 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-rose-500 hover:pl-5 transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
          <button className="block w-full text-center px-3 py-2 rounded-md text-base font-bold bg-white text-rose-500 mt-4 active:scale-95 transition-transform">
            Join us
          </button>
        </div>
      </div>
    </nav>
  );
};

const Home = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <div className="flex-1">
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/home_page.jpg" alt="Hero Background" className="w-full h-full object-cover animate-subtle-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-rose-900/60 to-rose-900/80" />
      </div>

      <div className="relative z-10 text-center px-4 w-full">
        <ScrollReveal type="fade-up" delay={100}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest mb-2 drop-shadow-2xl">EKSTRAKULIKULER</h1>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={300}>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-white tracking-widest mb-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">KAJUKU</h2>
        </ScrollReveal>
        <ScrollReveal type="zoom-in" delay={500}>
          <button
            onClick={() => setCurrentPage("about")}
            className="relative overflow-hidden group bg-rose-500 text-white font-black py-4 px-10 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.5)] hover:shadow-[0_0_30px_rgba(244,63,94,0.8)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-15">Ikuzoo!!</span>
          </button>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block animate-float z-20" style={{ animationDelay: "0s" }}>
        <img src="/Assets/karakter_cowo.png" alt="Chibi Cowo" className="w-50 h-62 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="absolute top-1/4 right-10 hidden md:block animate-float-delayed z-20" style={{ animationDelay: "1s" }}>
        <img src="/Assets/karakter_cewe.png" alt="Chibi Cewe" className="w-42 h-54 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  </div>
);

const About = () => {
  const kegiatanList = ["Animasi", "Bahasa", "Cosplay", "Manga Drawing", "Cover Dance"];

  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 py-20 w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <ScrollReveal type="fade-left" className="flex items-center">
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-rose-100">
            <h2 className="text-3xl font-bold text-rose-500 mb-4 inline-block relative">
              Tentang Kajuku
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-rose-400 rounded-full" />
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mt-6 text-lg">
              nama 'kajuku' mengambil singkatan dari <span className="font-bold text-rose-600">"Kazoku Juuichi Kurabu"</span> (Klub Jepang) yang merupakan ekskul bahasa dan budaya Jepang di SMAN 11 Bekasi.
              <br />
              <br />
              Kajuku merupakan program ekstrakurikuler yang terus berkembang di bawah naungan SMAN 11 Bekasi dengan tujuan mengenalkan dan mempelajari budaya dan bahasa Jepang melalui berbagai macam kegiatan yang berbeda setiap tahunnya.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal type="fade-right" delay={200}>
          <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8">
            <img 
              src="/logo_kajuku.png" // Ganti dengan path logo Anda
              alt="Logo KAJUKU" 
              className="w-full h-full object-contain"
            />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal type="fade-up" delay={100} className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2 italic" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          Kegiatan
        </h2>
        <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full mt-4" />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {kegiatanList.map((item, index) => (
          <ScrollReveal key={item} type="fade-up" delay={index * 100}>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 italic font-serif">{item}</h3>
              <div className="bg-rose-500 rounded-3xl w-full h-64 flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                FOTO {item}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};


const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    { id: 1, title: "JUARA 1", category: "Tim Cosplay", names: ["1. NAMA SATU", "2. NAMA DUA", "3. NAMA TIGA"] },
    { id: 2, title: "JUARA 2", category: "Cover Dance", names: ["1. NAMA EMPAT", "2. NAMA LIMA", "3. NAMA ENAM"] },
    { id: 3, title: "JUARA 3", category: "Manga Drawing", names: ["1. NAMA TUJUH", "2. NAMA LAPAN", "3. NAMA SEMBILAN"] },
  ];

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 py-20 w-full flex flex-col items-center justify-center overflow-hidden">
      <ScrollReveal type="fade-up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 uppercase tracking-widest">
          Prestasi <span className="text-rose-500">Kajuuku</span>
        </h2>
        <p className="text-gray-500">Mengharumkan nama sekolah melalui karya dan karsa.</p>
      </ScrollReveal>

      <div className="relative w-full flex items-center justify-center py-10 h-[500px]">
        <button onClick={handlePrev} className="absolute left-4 md:left-20 z-40 text-rose-500 bg-white/80 hover:bg-rose-500 hover:text-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="relative w-full max-w-4xl flex items-center justify-center">
          {achievements.map((item, index) => {
            const isActive = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + achievements.length) % achievements.length;
            const isRight = index === (currentIndex + 1) % achievements.length;

            let cardStyle = "opacity-0 scale-75 hidden";
            if (isActive) cardStyle = "opacity-100 scale-100 z-30 translate-x-0";
            if (isLeft) cardStyle = "opacity-60 scale-90 -translate-x-[110%] blur-[2px] z-20";
            if (isRight) cardStyle = "opacity-60 scale-90 translate-x-[110%] blur-[2px] z-20";

            return (
              <div key={item.id} className={`absolute transition-all duration-700 ease-in-out ${cardStyle}`}>
                <div className={`w-72 md:w-80 bg-gradient-to-br from-rose-400 to-rose-600 rounded-3xl shadow-2xl p-8 border-4 border-white text-white flex flex-col items-center ${isActive ? "h-[28rem]" : "h-[24rem]"}`}>
                  <h2 className="text-4xl font-extrabold mb-6" style={{ fontFamily: "'Brush Script MT', cursive" }}>{item.title}</h2>
                  <div className="w-32 h-32 bg-white/20 rounded-2xl mb-6 flex items-center justify-center font-bold text-white/50">FOTO</div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 w-full">
                    <h3 className="text-white font-bold text-center mb-2 border-b border-white/30 pb-1">{item.category}</h3>
                    <div className="text-center text-sm space-y-1">
                      {item.names.map((n, i) => (
                        <p key={i}>{n}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="absolute right-4 md:right-20 z-40 text-rose-500 bg-white/80 hover:bg-rose-500 hover:text-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <footer className="bg-rose-600 text-white mt-auto relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-pink-50" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 pb-12 relative z-10">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold italic mb-6 drop-shadow-md hover:scale-105 origin-left transition-transform duration-300 cursor-default" style={{ fontFamily: "'Brush Script MT', cursive, sans-serif" }}>
          KAJUKU
        </h2>
        <p className="text-rose-100 leading-relaxed max-w-sm text-sm">
          Komplek Perwira Tinggi (Kavling Pati TNI AU), Jalan Wibawamukti, Kelurahan Jatisari, Kecamatan Jatiasih, Kota Bekasi, Jawa Barat (Kode Pos 17426)
        </p>
        <div className="space-y-2 pt-4 border-t border-rose-500 max-w-xs">
          <p className="text-sm flex items-center hover:text-rose-200 transition-colors cursor-pointer">
            <WhatsApp className="w-4 h-4 mr-2" /> (021) 29993351
          </p>
          <p className="text-sm flex items-center hover:text-rose-200 transition-colors cursor-pointer">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mail.sman11bekasi@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end justify-center space-y-6">
        <img src="/logo_kajuku.png" alt="Logo" className="w-24 h-24 object-contain rotate-3 hover:rotate-12 transition-transform" />

        <div className="flex space-x-6 text-sm font-semibold text-rose-100">
          <button onClick={() => setCurrentPage("about")} className="hover:text-white hover:-translate-y-1 transition-all">About us</button>
          <button onClick={() => setCurrentPage("history")} className="hover:text-white hover:-translate-y-1 transition-all">History</button>
          <button onClick={() => setCurrentPage("achievement")} className="hover:text-white hover:-translate-y-1 transition-all">Achievement</button>
        </div>
        <div className="text-center md:text-right pt-4">
          <p className="text-sm mb-3 font-semibold text-rose-200">Our Social Network</p>
          <div className="flex space-x-4 justify-center md:justify-end">
            
            {/* WhatsApp - Ganti 628xxxxxxxxxx dengan nomor WA asli Anda */}
            <a 
              href="https://wa.me/628xxxxxxxxxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-110"
            >
              <WhatsApp className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/kazoku.11.kurabu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

          </div>
        </div>
      </div>
    </div>

    <div className="bg-rose-700 py-4 text-center text-xs text-rose-300">&copy; 2026 All BPH Kajuku X Teknologi Informasi ITS angkatan 2025. All rights reserved.</div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "history":
        return <History />;
      case "achievement":
        return <Achievement />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans text-gray-800 bg-pink-50 selection:bg-rose-300 selection:text-white">
      <CloudBackground />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow flex flex-col">{renderPage()}</main>

      <Footer setCurrentPage={setCurrentPage} />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float { 0%, 100% { transform: translateY(0) rotate(-6deg); } 50% { transform: translateY(-15px) rotate(-3deg); } }
          @keyframes float-delayed { 0%, 100% { transform: translateY(0) rotate(12deg); } 50% { transform: translateY(-20px) rotate(8deg); } }
          @keyframes pan-bg { 0% { background-position: 0 0; } 100% { background-position: 100px 100px; } }
          @keyframes subtle-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
          .animate-pan-bg { animation: pan-bg 20s linear infinite; }
          .animate-subtle-zoom { animation: subtle-zoom 20s alternate ease-in-out infinite; }
          .animate-spin-slow { animation: spin 3s linear infinite; }
          html { scroll-behavior: smooth; }
        `,
      }} />
    </div>
  );
}
