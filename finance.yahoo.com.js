try {
  // home
  document.getElementById('mrt-node-Lead-1-Ad')?.remove();
  document.getElementById('defaultLREC-sizer')?.remove();
  document.getElementById('defaultLREC2-sizer')?.remove();
  document.getElementById('mrt-node-Col2-4-AdUnitWithTdAds')?.remove();
  document.getElementById('mrt-node-Col2-5-Ad')?.remove();
  document.getElementById('mrt-node-Col2-6-LinkOut')?.remove();
//   document.getElementsByClassName('controller gemini-ad native-ad-item Feedback Pos(r)')?.forEach(e => e.remove());
  Array.from(document.getElementsByClassName('controller gemini-ad native-ad-item Feedback Pos(r)')).forEach(e => e.remove());

  // /quote/*
  document.getElementById('mrt-node-Lead-0-Ad')?.remove();
  document.getElementById('mrt-node-Col2-0-ComboAd')?.remove();
  document.getElementById('mrt-node-Col2-1-QuoteModule')?.remove();
  document.getElementById('mrt-node-Col2-14-AdUnitWithTdAds')?.remove();
  document.getElementById('mrt-node-Col2-15-LinkOut')?.remove();

  console.log('APPLY SUCCESSFUL');
} catch (e) {
  console.log(e);
  console.log('APPLY FAILED');
}
