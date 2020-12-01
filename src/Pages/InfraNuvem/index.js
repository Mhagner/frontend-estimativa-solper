import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor'
import api from '../../Utils/api'
import ItemForm from '../../Components/ItemForm'
import useForm from '../../Utils/hooks/useForm'
import Loader from 'react-loader-spinner'
import { useHistory } from 'react-router-dom'
import ButtonIcon from '../../Components/ButtonIcon'

const defaultData = {
    data: '',
    ativo: true,
    servidores: []
}

const InfraNuvem = () => {
    const [{ values }, reset, handleChange, handleSubmit] = useForm();
    //const [data, setData] = useState('')

    const [infra, setInfra] = useState(defaultData)
    const [alterou, setAlterou] = useState(false)
    const [loader, setLoader] = useState(false)

    let history = useHistory()

    useEffect(() => {
        obtenhaInfra()
        //obtenhaServidores()
    }, [])

    function obtenhaInfra() {
        setLoader(true)
        api.get('infra/5f237bd6e9c53a22a8a9edf9')
            .then(response => {
                setInfra(response.data)
                setLoader(false)
            })
            .catch(error => {
                console.log("Erro ao obter as informações de infraestrutura!")
            })
    }

    function salvarInfra(e) {
        if (alterou) {
            api.put('infra/5f237bd6e9c53a22a8a9edf9', infra)
                .then(response => {
                    setAlterou(false)
                    console.log("sucesso!")
                    history.push('/parametrizacoes')
                })
                .catch(error => {
                    console.log("erro!")
                })
        } else {
            console.log("Não teve alterações!")
        }
    }

    function voltar() {
        return '/parametrizacoes'
    }

    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "Parametrizações"
        },
        {
            descricao: "Infraestrutura nuvem",
            current: 'page'
        },
    ]

    const columns = [
        {
            dataField: '_id',
            text: 'ID',
            headerStyle: () => {
                return { width: "6%" };
            },
            align: "center",
            hidden: true,
            editable: false
        },
        {
            dataField: 'instancia',
            text: 'Instância',
            headerStyle: () => {
                return { width: "16%" };
            },
            editable: false
        },
        {
            dataField: 'cpu',
            text: 'CPU',
            headerStyle: () => {

                return { width: "16%" };
            },
            editable: false
        },
        {
            dataField: 'ram',
            text: 'RAM',
            headerStyle: () => {
                return { width: "16%" };
            },
            editable: false
        },
        {
            dataField: 'custo',
            text: 'Custo/Mês',
            headerStyle: () => {
                return { width: "16%" };
            },
            type: 'text'
        }
    ]

    return (
        <Main titlePage="Infraestrutura Nuvem">
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit(salvarInfra)}>
                {/*  <div className="row">
                    <div className="col-md-4">
                        <ItemForm
                            label="Data"
                            name="data"
                            readOnly
                            value={infra.data}
                        />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        {(loader) ?
                            <Loader
                                type="TailSpin"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            /> :
                            <BootstrapTable
                                keyField="_id"
                                bootstrap4
                                data={infra.servidores}
                                columns={columns}
                                noDataIndication="Sem dados para apresentar!"
                                hover
                                cellEdit={cellEditFactory({
                                    mode: 'click',
                                    blurToSave: true,
                                    afterSaveCell:
                                        (oldValue, newValue, row, column) => {
                                            if (oldValue !== newValue) {
                                                setAlterou(true)
                                            }
                                        }
                                })}
                            />
                        }
                    </div>
                </div>
                <div className="row">
                    <ButtonIcon
                        size={2}
                        route={voltar()}
                        color="secondary">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </ButtonIcon>
                    <div className="col-md-2">
                        <button
                            type="submit"
                            className="btn btn-success">
                            <div className="icon-button">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    {/* <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={cancelarAlteracao}>
                            Cancelar
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button
                            type="submit"
                            className="btn btn-success">
                            Salvar
                        </button>
                    </div> */}
                </div>
            </form>
            <hr className="featurette-divider" />
        </Main>
    );
};

export default InfraNuvem;
