import { defineStore } from "pinia";
import { mainStore } from "../mainStore";
import axiosInstance from "../axios_instance";

export const vendorStore = defineStore("vendorStore", {
  state: () => ({
    checkToken: document.cookie
      .split(";")
      .map((coki) => coki.split("="))
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key.trim()]: decodeURIComponent(val),
        }),
        {}
      )["Admin"],
    allVendors: [],
    activeVendors: [],
    suspendedVendors: [],
    vendor: [],
    serchData: [],
  }),

  actions: {
    // all admins
    async getAllVendors() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/users/all`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.allVendors = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
    // // active admins
    async getActiveVendors() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/users/show`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.activeVendors = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
    // // suspended admins
    async getSuspendedVendors() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/users/trashed`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.suspendedVendors = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },

    // // admin
    async getVendor(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/one`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.vendor = res.data.data;
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // // delete admin
    async destroyVendor(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/destroy`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Vendor deleted suuccessfully", 1);
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // // restore admin
    async restoreVendor(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/restore`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // // remove admin
    async deleteVendor(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/forceDelete`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // // add admin
    async addVendor(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/store`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Vendor created suuccessfully", 1);
          this.getAllAdmins();
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // update admin
    async updateVendor(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/users/update`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Vendor updated suuccessfully", 1);
          this.getAllVendors();
          this.getSuspendedVendors();
          this.getActiveVendors();
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    // search vendor
    async searchVendor(data) {
      let result;
      await axiosInstance
        .post(
          `${mainStore().apiLink}/clients/search-result`,
          { name: data },
          {
            headers: {
              Authorization: `Bearer ${
                this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
              }`,
            },
          }
        )
        .then((res) => {
          result = res;
          this.serchData = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
  },
});
