function IsListe({ yapilacaklar, vekilFonksiyon }) {
  const tamamlandiYap = (is) => {
    vekilFonksiyon({ type: "TAMAMLANDI", id: is.id });
  };

  const isSil = (is) => {
    vekilFonksiyon({ type: "SİL", id: is.id });
  };

  return (
    <>
      {yapilacaklar.veri.map((is) => (
        <div key={is.id} className="d-flex justify-content-between">
          <label className="d-flex gap-2">
            <input
              type="checkbox"
              checked={is.complete}
              onChange={() => tamamlandiYap(is)}
            />
            {is.title}
          </label>

          <span className="text-danger" onClick={() => isSil(is)}>
            <i class="bi bi-trash"></i>
          </span>
        </div>
      ))}
    </>
  );
}

export default IsListe;
