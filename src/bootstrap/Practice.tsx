export function Practice() {
  return (
    <>
      <ul className="nav nav-tabs bg-light m-0 p-0">
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Таблица маршрутизации
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Группы направлений
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary active">
            Направления
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Маршруты
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Шлюзы
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Прокси
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Сеть
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary">
            Медиа
          </a>
        </li>
      </ul>
      <div className="card border-0">
        <div className="card-header border-0 m-3 ms-0 me-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light m-0">
              <li className="breadcrumb-item">
                <a className="card-link text-decoration-none"
                   aria-current="page"
                   href="#">
                  Все направления
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                dir1
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="card">
        <div className="card-header bg-light">
          Входит в группы
        </div>
        <div className="card-body">
          <a className="card-link px-3 text-decoration-none" aria-current="page" href="#">
            group1
          </a>
          <a className="card-link px-3 text-decoration-none" aria-current="page" href="#">
            group2
          </a>
          <a className="card-link px-3 text-decoration-none" aria-current="page" href="#">
            group3
          </a>
          <a className="card-link px-3 text-decoration-none" aria-current="page" href="#">
            group4
          </a>
          <a className="card-link px-3 text-decoration-none" aria-current="page" href="#">
            group5
          </a>
        </div>
      </div>
      <div className="card">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-4 col-sm-6">
              <label>
                Название
              </label>
              <div className="input-group">
                <input type="text" className="form-control"/>
                <button type="button"
                        className="btn btn-success  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Разблокировано
                </button>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 form-group">
              <label>
                Описание
              </label>
              <input className="form-control"/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-sm-6">
              <label>
                Количество попыток ремаршрутизации
              </label>
              <div className="input-group mb-3">
                <button type="button"
                        className="btn border">
                  <i className="fa-sharp fa-solid fa-down-long"></i>
                </button>
                <input type="text"
                       className="form-control"/>
                <button type="button"
                        className="btn border"
                        aria-expanded="false">
                  <i className="fa-sharp fa-solid fa-up-long"></i>
                </button>
              </div>
            </div>
            <div className="col-md-8 col-sm-6">
              <label>
                Причины ремаршрутизации
              </label>
              <input type="text"
                     className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <label>
                Сеть
              </label>
              <div className="input-group">
                <input type="text"
                       className="form-control"/>
                <button type="button"
                        className="btn border dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <label>
                Алгоритм
              </label>
              <div className="input-group">
                <input type="text"
                       className="form-control"/>
                <button type="button"
                        className="btn border dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <label>
                Тариф
              </label>
              <div className="input-group">
                <input type="text"
                       className="form-control"/>
                <button type="button"
                        className="btn border dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                </button>
              </div>
            </div>
          </div>
          <div className="row pt-3 d-flex justify-content-md-start">
            <div className="col-md-12 col-sm-12 m-0 pe-1">
              <input type="checkbox"/>
              <label className="ps-1">
                Anti Tromboning
              </label>
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  Ограничения
                </div>
                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row g-3 align-items-center fw-bold">
                      <div className="col-3 pe-3">
                      </div>
                      <div className="col-3">Вх</div>
                      <div className="col-3">Исх</div>
                      <div className="col-3">Все</div>
                    </div>
                    <div className="row g-3 mb-2 align-items-center">
                      <div className="col-3 pe-3 fw-bold">
                        Calls
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                    </div>
                    <div className="row g-3 mb-2 align-items-center">
                      <div className="col-3 pe-3 fw-bold">
                        CPS
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                    </div>
                    <div className="row g-3 align-items-center">
                      <div className="col-3 pe-3 fw-bold">
                        AvgCPS
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                      <div className="col-3">
                        <input className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <label>
                    Фильтр
                  </label>
                  <div className="btn-group btn-group-sm"
                       role="group"
                       aria-label="...">
                    <button type="button"
                            className="btn bg-white btn-outline-secondary fw-bold">
                      <i className="fa-sharp fa-solid fa-plus"></i>
                    </button>
                    <button type="button"
                            className="btn bg-white btn-outline-secondary fw-bold">
                      <i className="fa-sharp fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table ">
                    <tbody>
                    <tr className="table-success">
                      <th scope="row">
                        <input type="checkbox"/></th>
                      <td>
                        CgPn=.(0.22)<br/>InGW=gw*
                      </td>
                      <td>
                        <a href="#">
                          <i className="fa-solid fa-gear"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="table-danger">
                      <th scope="row">
                        <input type="checkbox"/>
                      </th>
                      <td>
                        CgPn=.(0.22)<br/>CgPC=.(0.22)
                      </td>
                      <td>
                        <a href="#">
                          <i className="fa-solid fa-gear"></i>
                        </a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-bottom-0">
        <div className="card-header d-flex justify-content-between g-5 align-items-center">
          <label>
            Список привязанных маршрутов
          </label>
          <div className="btn-group btn-group-sm"
               role="group"
               aria-label="...">
            <button type="button"
                    className="btn bg-white btn-outline-secondary fw-bold">
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
            <button type="button"
                    className="btn bg-white btn-outline-secondary fw-bold">
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="card-body border-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <table className="table table-sm">
                  <tbody>
                  <tr>
                    <th></th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Описание</th>
                    <th>Приоритет</th>
                    <th>Вес</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input type="checkbox"/>
                    </th>
                    <td>
                      <a href="#" className="text-decoration-none">
                        route1
                      </a>
                    </td>
                    <td>
                      <button type="button"
                              className="btn btn-success">
                        Работает
                      </button>
                    </td>
                    <td>Маршрут 1</td>
                    <td>1</td>
                    <td>100</td>
                    <td>
                      <a href="#">
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </td>
                  </tr>
                  <tr className="align-items-stretch">
                    <th scope="row">
                      <input type="checkbox"/>
                    </th>
                    <td>
                      <a href="#" className="text-decoration-none">
                        route2
                      </a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Заблокировано
                      </button>
                    </td>
                    <td>Маршрут 2</td>
                    <td>2</td>
                    <td>150</td>
                    <td>
                      <a href="#">
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}