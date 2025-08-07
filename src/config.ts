const config = {
  marriageDate: '2025-08-10T10:18:00',
  coupleNames: {
    groom: {
      full: 'Mohd Akmal Bin Imran',
      short: 'Akmal',
    },
    bride: {
      full: 'Nurain binti Syed',
      short: 'Ain',
    },
  },
  parentsNames: {
    father: 'Imran bin Yusof',
    mother: 'Norlida binti Ahmad',
  },
  eventDetails: {
    time: '11.00 Pagi - 5.00 Petang',
    venue: 'Dewan Serbaguna, Taman Melati, Kuala Lumpur',
  },
  eventTentative: [
    { time: '11.00a.m.', tentative: 'Ketibaan Tetamu' },
    { time: '12.00p.m.', tentative: 'Majlis Akad Nikah' },
    { time: '1.00p.m', tentative: 'Majlis Makan Beradab' },
  ],
  invitationText:
    "DENGAN SEGALA HORMATNYA MENJEMPUT DATO'/ DATIN/ TUAN/ PUAN/ ENCIK/ CIK DAN SEISI KELUARGA KE MAJLIS PERKAHWINAN PUTERA KAMI BERSAMA PASANGANNYA",
  welcomeText: 'ASSALAMUALAIKUM W.B.T',
  eventTitle: 'Walimatul Urus',
} as const;

export default config;
