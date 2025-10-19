const config = {
  marriageDate: '2025-12-28T10:00:00+08:00',
  coupleNames: {
    groom: {
      full: 'Muhammad Akmal bin Imran',
      short: 'Akmal',
    },
    bride: {
      full: 'Nurain binti Saad',
      short: 'Ain',
    },
  },
  parentsNames: {
    father: 'Imran bin Yusof',
    mother: 'Noorlida binti Ahmad Shah',
  },
  eventDetails: {
    time: '11.00 Pagi - 5.00 Petang',
    venue: 'Senja Hills, Taman Desa Ros, Kajang, Selangor',
  },
  eventTentative: [
    { time: '11.00 a.m. - 4.00 p.m.', tentative: 'Jamuan Makan' },
    { time: '12.30 p.m.', tentative: 'Ketibaan Pengantin' },
  ],
  invitationText:
    "DENGAN SEGALA HORMATNYA MENJEMPUT DATO'/ DATIN/ TUAN/ PUAN/ ENCIK/ CIK DAN SEISI KELUARGA KE MAJLIS PERKAHWINAN PUTERA KAMI BERSAMA PASANGANNYA",
  welcomeText: 'السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
  eventTitle: 'Walimatul Urus',
  doaPengantin: `Ya Allah, berkatilah majlis perkahwinan ini, 
  limpahkan baraqah dan rahmat kepada kedua mempelai ini, Kurniakanlah mereka zuriat yang soleh dan solehah. 
  Kekalkan jodoh mereka di dunia dan di akhirat dan sempurnakanlah agama mereka dengan berkat ikatan ini.`,
} as const;

export default config;
