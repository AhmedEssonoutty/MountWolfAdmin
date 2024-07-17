<template>
    <div>
        <div class="vendors-table">
            <table class="table table-hover table-st-1">
                <thead>
                    <tr>
                        <th scope="col p-3" style="width: 50px;"> </th>
                        <th scope="col">All Vendors</th>
                        <th scope="col">Status</th>
                        <th scope="col">Type of<br />Subscription</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Default<br />Payment Method</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">End Date</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-flex gap-3 align-items-center justify-content-center">

                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg width="5" height="19" viewBox="0 0 5 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)"
                                                fill="#464A61" />
                                            <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)"
                                                fill="#464A61" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <input type="checkbox" checked disabled>
                                </div>
                            </div>
                        </td>
                        <td @click="router.push({ name: 'about' })">Name Vendor</td>
                        <td>Suspended</td>
                        <td>Free</td>
                        <td>menus@gmail.com</td>
                        <td>0123456789</td>
                        <td> <vue-feather class="me-2" size="16" type="credit-card"></vue-feather>****67836</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style lang="scss" scoped>
.dropdown-toggle {
    &::after {
        display: none;
    }
}
</style>