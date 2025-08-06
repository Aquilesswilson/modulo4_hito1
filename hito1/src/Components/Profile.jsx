import React from 'react'

const Profile = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h4>Mi Perfil</h4>
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input
                            type="text"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <small id="helpId" class="form-text text-muted">jose@gmail.com</small>
                        <br />
                        <input
                            name=""
                            id=""
                            class="btn btn-primary"
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