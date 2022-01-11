<template>
  <div id="booking">
    <b-container fluid>
      <b-form>
        <b-row class="no-padding-x content-center">
          <b-col md="4">
            <b-form-group
              id="input-group-1"
              label="Személyes adatok"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Teljes név"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Szem.ig. szám"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-email">
              <b-form-input
                id="input-email"
                type="email"
                placeholder="Email cím"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="tel"
                placeholder="Telefonszám"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Állampolgárság"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group
              id="input-group-1"
              label="Vadászat adatai"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="number"
                min="1"
                placeholder="Vadászok száma"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="number"
                min="0"
                placeholder="Kisérők száma"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="number"
                placeholder="Hány vadat szeretne lőni"
                min="1"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Trófea mérete"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="date"
                placeholder="Érkezés"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <div class="buttonContainer">
          <b-button type="submit" variant="success">Foglalás</b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    return {
      name: "",
      min: minDate,
    };
  },
  methods: {
    async PostData() {
      await fetch("https://api.zhunting.hu/book", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.name),
      })
        .then((res) => {
          console.log(this);
          if (res.ok) {
            console.log(this);
            this.$router.push("/sikeres-foglalas");
          }
        })
        .catch(function (res) {
          console.log(res);
        });
    },
    onSubmit(event) {
      event.preventDefault();
      this.PostData();
    },
  },
};
</script>

<style scoped>
#booking {
  margin-top: 3%;
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #28a745 !important;
  background-color: #28a745 !important;
}
.buttonContainer {
  display: flex;
  place-content: center;
}
input:focus {
  box-shadow: 0 0 0.2rem 0.2rem rgba(40, 167, 69, 0.4);
  border-color: #28a745 !important;
}
input {
  background: rgba(96, 173, 114, 0.5);
  border: none;
}
input:focus {
  background: rgba(96, 173, 114, 0.7);
}
input:-webkit-autofill {
  background-color: #28a745 !important;
  -webkit-box-shadow: 0 0 0px 1000px rgba(96, 173, 114, 1) inset;
  -webkit-text-fill-color: #5e5d5d !important;
}
input:-internal-autofill-selected {
  background-color: #28a745 !important;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #bababa;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bababa;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #bababa;
}
.form-control {
  color: #bababa;
}
.no-margin-x {
  margin-left: unset !important;
  margin-right: unset !important;
}
.content-center {
  place-content: center;
}
.no-padding-x {
  padding-left: unset !important;
  padding-right: unset !important;
}
</style>