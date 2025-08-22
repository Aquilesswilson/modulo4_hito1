import React from 'react'

const Profile = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h4>Mi Perfil</h4>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" className="form-text text-muted">jose@gmail.com</small>
                        <br />
                        <input
                            name=""
                            id=""
                            className="btn btn-primary"
                            type="button"
                            value="Cerrar sesión"
                        />
                        

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile