<template>
  <div class="contact" v-if="contacts.length">
    <b-container fluid>
      <b-row
        class="detail no-margin"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <b-col md="3" sm="10" class="no-padding" v-if="contact.id">
          <h3>{{ contact.name }}</h3>
          <h5>{{ contact.phoneNumber }}</h5>
          <h5>{{ contact.email }}</h5>
          <h5>{{ contact.title }}</h5>
        </b-col>
        <Loader size="normal" v-else></Loader>
        <b-col cols="1" class="call-col no-padding">
          <a
            :disabled="active"
            class="btn btn-call"
            href="tel:{contact.phoneNumber}"
            >Hívás</a
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
  <Loader v-else size="large"></Loader>
</template>
<script>
import Loader from "../components/loader.vue";
export default {
  name: "ContactInfo",
  components: { Loader },
  data() {
    return {
      active: true,
      contacts: [],
    };
  },
  beforeMount() {
    this.getContact();
  },
  methods: {
    async getContact() {
      const res = await fetch("https://api.zhunting.hu/api/contact/");
      const data = await res.json();
      this.contacts = data;
      if (res.ok) {
        this.active = false;
      }
    },
  },
};
</script>
<style scoped>
h3,
h5 {
  font-weight: bold;
}
.contact {
  text-align: left;
  padding: 50px;
  overflow: hidden;
}
.detail {
  margin-bottom: 25px;
}
@media only screen and (max-width: 600px) {
  .contact-margin {
    margin-left: 10px;
    margin-bottom: 10px;
  }
}
@media only screen and (min-width: 600px) {
  .contact-margin {
    margin-left: 80px;
    margin-bottom: 80px;
  }
}
.btn-call {
  color: #fff;
  background-color: #42b983;
  border-color: #42b983;
}
.call-col {
  display: flex;
  place-items: center;
}
.no-margin {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.no-padding {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>
