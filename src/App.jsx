// Header yang akan dikirim sebagai JSX
function Header() {
  return <h1>Aku adalah Header dari props!</h1>;
}

// child
function InfoBox(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <p><strong>Nama (String):</strong> {props.username}</p>
      <p><strong>Usia (Number):</strong> {props.age} tahun</p>
      <p><strong>Status Aktif (Boolean):</strong> {props.isActive ? "Aktif" : "Nonaktif"}</p>
      <p><strong>Daftar Barang (Array):</strong> {props.items.join(", ")}</p>
      <p><strong>Data User (Object):</strong> {props.user.name} ({props.user.age} tahun)</p>
      <p><strong>Header (JSX):</strong></p>
      {props.header}
      <button onClick={props.onClick}>Klik Aku! (Function)</button>
    </div>
  );
}

// parent
function App() {
  const handleClick = () => {
    alert("Tombol dari props telah ditekan!");
  };

  return (
    <div>
      <h1>Contoh Pengiriman Props Berbagai Tipe Data</h1>
      <InfoBox
        username="Tirta"                          // String
        age={17}                                  // Number
        isActive={true}                           // Boolean
        items={["Tas", "Buku", "Laptop"]}         // Array
        user={{ name: "Reyhan Tirta", age: 17 }}  // Object
        header={<Header />}                       // JSX / Komponen
        onClick={handleClick}                     // Function
      />
    </div>
  );
}

export default App;

// komponen dasar untuk contoh modul halaman 4
// export default App;

// function Welcome(props) {
//   return <p>Selamat datang, {props.username}!</p>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome username="Tirta" />
//       <Welcome username="Adit" />
//     </div>
//   );
// }

