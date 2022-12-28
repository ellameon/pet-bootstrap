export function BootstrapComponent() {
  return (
    <>
      <div className="card border-0">
        <div className="card-header">
          <ul className="nav nav-tabs border-0">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Страница пользователя
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Test 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Test 3
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-secondary" href="#">
                Test 4
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <input className="form-control" placeholder="Имя"/>
                </div>
                <div className="col-6">
                  <input className="form-control" placeholder="Фамилия"/>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12">
                  <input className="form-control" type="email" placeholder="email"/>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12">
                  <input className="form-control" type="tel" placeholder="телефон"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label className="form-label" form="citySelector">
                Выберите свой город
              </label>
              <select className="form-select" aria-label="select city" form="citySelector">
                <option selected>Город 1</option>
                <option value="1">Город 2</option>
                <option value="2">Город 3</option>
                <option value="3">Город 4</option>
              </select>
            </div>
            <div className="col-6">
              <label className="form-label" form="streetSelector">
                Выберите улицу
              </label>
              <select className="form-select" aria-label="select street" form="streetSelector">
                <option selected>Улица 1</option>
                <option value="1">Улица 2</option>
                <option value="2">Улица 3</option>
                <option value="3">Улица 4</option>
              </select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <label className="form-label" aria-label="select house" form="houseSelector">
                Дом
              </label>
              <select className="form-select" aria-label="select house" form="houseSelector">
                <option selected>Дом 1</option>
                <option value="1">Дом 2</option>
                <option value="2">Дом 3</option>
                <option value="3">Дом 4</option>
              </select>
            </div>
            <div className="col-4">
              <label className="form-label" aria-label="stage select" form="stageSelector">
                Этаж
              </label>
              <select className="form-select" aria-label="stage select" form="stageSelector">
                <option selected>Этаж 1</option>
                <option value="1">Этаж 2</option>
                <option value="2">Этаж 3</option>
                <option value="3">Этаж 4</option>
              </select>
            </div>
            <div className="col-4">
              <label className="form-label" aria-label="apt select" form="aptSelector">
                Квартира
              </label>
              <select className="form-select" aria-label="apt select" form="aptSelector">
                <option selected>Квартира 1</option>
                <option value="1">Квартира 2</option>
                <option value="2">Квартира 3</option>
                <option value="3">Квартира 4</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label className="form-label">
                Расскажите немного о себе
              </label>
              <textarea className="form-control"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}