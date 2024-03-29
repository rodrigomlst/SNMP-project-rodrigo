<?php
session_start();
include('verifica_login.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <title>Glances</title>
    <style>
      .table-sm td,
      .table-sm th {
        padding: 0 0.3rem;
      }
    </style>
  </head>

  <body>
  
  <h2><?php echo $_SESSION['usuario'];?></h2>
  <h2><a href="/logout.php">Sair</a><h2>

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand text-white" href="#">Glances</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-4 px-1">
        <div class="card" >
            <div class="card-header text-center font-weight-bold">
              Info
            </div>
            <div class="card-body px-0">
              <table class="info table table-sm table-borderless mb-0">
                <tbody  id='info'></tbody>
              </table>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-header text-center font-weight-bold">
              NETWORK
            </div>
            <div class="card-body px-0">
              <table class="net table table-sm table-borderless mb-0">
                <thead>
                  <tr>
                    <th>NETWORK</th>
                    <th>Rx/s</th>
                    <th>Tx/s</th>
                  </tr>
                </thead>
                <tbody id='network'></tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-4 px-1" >
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              CPU
            </div>
            <div class="card-body px-0">
              <table class="table table-sm table-borderless mb-0" id='cpu'></table>
            </div>
            <div class="chart my-3">
              <canvas id="cpu-chart" width="400" height="170"></canvas>
            </div>
          </div>
        </div>
        <div class="col-4 px-1">
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              Memory
            </div>
            <div class="card-body px-0">
              <table class="table table-sm table-borderless mb-0">
                <tbody id='memory'></tbody>
              </table>
            </div>
            <div class="chart my-3">
              <canvas id="memory-chart" width="400" height="170"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
