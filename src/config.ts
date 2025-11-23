const config = {
  marriageDate: '2025-12-28T11:00:00+08:00',
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
    venue: 'Wilqadry Grandeur Hall, C-1-01, Centre Courtyard Conezion 62502, Ioi Resort, Putrajaya, Malaysia',
    venueWaze: "https://ul.waze.com/ul?ll=2.96521300%2C101.72103260",
    venueGoogleMaps: "https://maps.app.goo.gl/hFrzcrj3xJ3JFgG78",
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
