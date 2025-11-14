function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav style={{
      backgroundColor: '#553030ff',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <button onClick={() => setCurrentPage('home')} style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        margin: '0 15px',
        fontSize: '18px',
        cursor: 'pointer',
        textDecoration: currentPage === 'home' ? 'underline' : 'none'
      }}>Home</button>
      <button onClick={() => setCurrentPage('about')} style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        margin: '0 15px',
        fontSize: '18px',
        cursor: 'pointer',
        textDecoration: currentPage === 'about' ? 'underline' : 'none'
      }}>About</button>
      <button onClick={() => setCurrentPage('services')} style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        margin: '0 15px',
        fontSize: '18px',
        cursor: 'pointer',
        textDecoration: currentPage === 'services' ? 'underline' : 'none'
      }}>Services</button>
      <button onClick={() => setCurrentPage('contact')} style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        margin: '0 15px',
        fontSize: '18px',
        cursor: 'pointer',
        textDecoration: currentPage === 'contact' ? 'underline' : 'none'
      }}>Contact</button>
    </nav>
  );
}

export default Navbar;