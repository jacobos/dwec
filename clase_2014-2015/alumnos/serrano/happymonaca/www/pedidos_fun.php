<ons-page>

    <div class="login-form" ng-controller="ControladorPedidos">

        <table class="table table table-bordered table-striped table-hover table-condensed " style=" text-align: center">
            <thead>
                <th style=" text-align: center">codes</th>
                <th style=" text-align: center">cod_users</th>
                <th style=" text-align: center">code_customers</th>
                <th style=" text-align: center">date</th>
                <th style=" text-align: center">errand</th>
                <th style=" text-align: center">price</th>
                <th style=" text-align: center">
                    <a type="button" class="btn btn-primary btn-large  " href="#test_modal_addPedido" data-toggle="modal" style="background:#000;">
                        <ons-icon icon="ion-plus-circled" size="21px" class="ons-icon ons-icon--ion ion-plus-circled" style="font-size: 10px;"></ons-icon>
                    </a>
                </th>
            </thead>

            <tr ng-repeat="pedido in getCurrentPage()">
                <td >{{pedido.cod}}</td>
                <td>{{pedido.cod_usuario}}</td>
                <td>{{pedido.cod_cliente}}</td>
                <td>{{pedido.fecha}}</td>
                <td>{{pedido.encargo}}</td>
                <td>{{pedido.precio}}</td>
                <td>
                    <a type="button" class="btn btn-primary btn-large modificarUser" href="#test_modal_mod" data-toggle="modal">
                        <ons-icon icon="ion-wrench" size="21px" class="ons-icon ons-icon--ion ion-plus-circled" style="font-size: 10px;"></ons-icon>
                    </a>
                    <a type="button" ng-click="eliminar(pedido.cod)" class="btn btn-primary btn-large eliminarUno  " href="#test_modal" data-toggle="modal">
                        <ons-icon icon="ion-trash-a" size="21px" class="ons-icon ons-icon--ion ion-plus-circled" style="font-size: 10px;"></ons-icon>
                    </a>
                </td>
            </tr>

        </table>

        <div class="modal fade" id="test_modal">

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                 </span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">Confirmación de la acción</h4>
                    </div>
                    <div class="modal-body">
                        <p>¿Estás seguro de eliminar esta campo?</p>
                    </div>
                    <div class="modal-footer">
                        <form class="form-horizontal" method="post">
                            <div class="control-group">
                                <label class="control-label" for="dlgAddDeviceFolder_name">Pulsa aceptar para eliminar</label>
                                <div class="controls">
                                    <button type="button" class="btn btn-default " data-dismiss="modal">Cancelar</button>
                                    <input type="submit" ng-click="destroyed()" class="btn btn-primary eliminar " name="eliminar" data-dismiss="modal" value="Aceptar"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="test_modal_addPedido">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                 </span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">Añadir un nuevo campo</h4>
                    </div>
                    <div class="modal-body">

                        <form class="form-horizontal">

                            <div class="form-group has-feedback">
                                <label class="control-label  col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Usuario</label>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <select class="form-control addNamePedido" ng-model="nameUser">
<!--                                        <option selected="selected">Selecciona</option>;-->
                                        
                                        <?php $usersSelect=mysqli_query(mysqli_connect("localhost", "root", "Shiras8." , "happy_tienda"), 'SELECT nombre FROM usuarios '); while($Usser=mysqli_fetch_array($usersSelect)){ echo '<option  >'.$Usser[0]. '</option>'; }?>
                                        
                                    </select>
                                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputSuccess3Status" class="sr-only">(success)</span>
                                </div>
                            </div>

                            <div class="form-group has-feedback">
                                <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Cliente</label>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <select class="form-control addCliente" ng-model="nameCli">
<!--                                        <option>Selecciona</option>;-->
                                        <?php $clienteSelect=mysqli_query(mysqli_connect("localhost", "root", "Shiras8." , "happy_tienda"), 'SELECT nombre FROM clientes '); while($Clieent=mysqli_fetch_array($clienteSelect)){ echo '<option>'.$Clieent[0]. '</option>'; }?>
                                    </select>
                                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputSuccess3Status" class="sr-only">(success)</span>
                                </div>
                            </div>

                            <div class="form-group has-feedback">
                                <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Fecha de Pedido</label>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <input type="date" ng-model="fechaPed" class="form-control addFechaPedido" id="inputSuccess3" aria-describedby="inputSuccess3Status">
                                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputSuccess3Status" class="sr-only">(success)</span>
                                </div>
                            </div>

                            <div class="form-group  has-feedback">
                                <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Encargo</label>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <textarea class="form-control addEncargoPedido" rows="3" id="inputSuccess3" aria-describedby="inputSuccess3Status" ng-model="encargoPed"></textarea>
                                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputSuccess3Status" class="sr-only">(success)</span>
                                </div>
                            </div>

                            <div class="form-group  has-feedback">
                                <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Precio</label>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <input type="text" class="form-control ModPrecioPedido" id="inputSuccess3" aria-hidden="true" ng-model="precioPed">
                                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputSuccess3Status" class="sr-only">(success)</span>
                                </div>
                            </div>

                        </form>

                    </div>
                    <div class="modal-footer">
                        <form class="form-horizontal" method="post">
                            <div class="control-group">
                                <label class="control-label" for="dlgAddDeviceFolder_name">Pulsa aceptar para añadir</label>
                                <div class="controls">
                                    <button type="button" class="btn btn-default " data-dismiss="modal">Cancelar</button>
                                    <input type="submit" ng-click="anadirPed()" class="btn btn-primary addPedido  " name="anadir" data-dismiss="modal" value="Añadir"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="modal fade" id="test_modal_mod">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;
                                 </span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">Modificación de campo</h4>
                </div>
                <div class="modal-body">

                    <form class="form-horizontal">
                        <div class="form-group has-feedback">
                            <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Usuario</label>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <select class="form-control user">
                                    <option>Selecciona</option>;
                                    <?php $userModSelect=mysqli_query(mysqli_connect("localhost", "root", "Shiras8." , "happy_tienda"), 'SELECT nombre FROM usuarios '); while($userModSel=mysqli_fetch_array($userModSelect)){ echo '<option>'.$userModSel[0]. '</option>'; }?>
                                </select>
                                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                            </div>
                        </div>

                        <div class="form-group  has-feedback">
                            <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Cliente</label>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <select class="form-control cliente">
                                    <option>Selecciona</option>;
                                    <?php $cliModSelect=mysqli_query(mysqli_connect("localhost", "root", "Shiras8." , "happy_tienda"), 'SELECT nombre FROM clientes '); while($cliModSel=mysqli_fetch_array($cliModSelect)){ echo '<option>'.$cliModSel[0]. '</option>'; }?>
                                </select>
                                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                            </div>
                        </div>

                        <div class="form-group  has-feedback">
                            <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Fecha Pedido</label>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <input type="text" class="form-control fecha" id="inputSuccess3" aria-describedby="inputSuccess3Status">
                                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                            </div>
                        </div>

                        <div class="form-group  has-feedback">
                            <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Encargo</label>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <textarea class="form-control encargo" rows="3" id="inputSuccess3" aria-describedby="inputSuccess3Status"></textarea>
                                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                            </div>
                        </div>

                        <div class="form-group  has-feedback">
                            <label class="control-label col-xs-3 col-sm-3 col-md-3 col-lg-3" for="inputSuccess3">Precio</label>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <input type="text" class="form-control precio" id="inputSuccess3" aria-describedby="inputSuccess3Status">
                                <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="modal-footer">
                    <form class="form-horizontal" method="post">
                        <div class="control-group">
                            <label class="control-label" for="dlgAddDeviceFolder_name">Pulsa aceptar para modificar</label>
                            <div class="controls">
                                <button type="button" class="btn btn-default " data-dismiss="modal">Cancelar</button>
                                <input type="submit" class="btn btn-primary modify " name="modify" data-dismiss="modal" value="Aceptar"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</ons-page>