import "./Footer.css"

function Footer() {
  return (
    <footer className="footer-distributed">
        <div className="footer-right">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            Horario: Lunes/viernes - 9:00am/6:00pm
            <br />
            E-mail: info@ejemplo.com
            <br />
            Telefono: (123) 456 7890
          </p>
          <hr />
          <p className="copyright">Gabriel Vargas &copy; 2022</p>
        </div>
    </footer>
  )
}

export default Footer