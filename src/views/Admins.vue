<template>
  <div class="main-body " style="padding: 2 rem 3rem">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="admin-title">All Admins</h3>

      <button class="add-admin" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <svg style="width: 2.4rem;height: 2.4rem;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7417 8.1 21.225C6.88333 20.6917 5.825 19.975 4.925 19.075C4.025 18.175 3.30833 17.1167 2.775 15.9C2.25833 14.6833 2 13.3833 2 12C2 10.6167 2.25833 9.31667 2.775 8.1C3.30833 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31667 8.1 2.8C9.31667 2.26667 10.6167 2 12 2C13.3833 2 14.6833 2.26667 15.9 2.8C17.1167 3.31667 18.175 4.025 19.075 4.925C19.975 5.825 20.6833 6.88333 21.2 8.1C21.7333 9.31667 22 10.6167 22 12C22 13.3833 21.7333 14.6833 21.2 15.9C20.6833 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6917 15.9 21.225C14.6833 21.7417 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#464A61" />
        </svg>

        <div>Add Admin</div>
      </button>



    </div>
    <div class="paymen-table">
      <table class="table table-hover table-st-1">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Mail</th>
            <th scope="col">Password</th>
            <th scope="col">Roles</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col p-3" style="width: 50px;"> </th>
          </tr>
        </thead>
        <tbody>

          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Viewer</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Viewer</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Super admin</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Technical</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>
          <tr>

            <td>65165651</td>
            <td>
              <div class="d-flex gap-1 w-100 align-items-center justify-content-center">

                <span style=" width: 2.2rem;height: 2.2rem;border-radius: 50%;background-color: #D9D9D9;display:
                inline-block;"></span>
                Name admin
              </div>
            </td>
            <td>menus@gmail.com</td>

            <td><input type="password"
                style="border: 1px solid #ddd ;border-radius: 8px;padding: 5px ;text-align: center;"
                value="00000000000"></td>
            <td>Editor</td>
            <td>DD/MM/YYYY</td>
            <td class="success-msg">Active</td>
            <td>
              <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg style="width: 0.5rem ;height: 1.9rem;" viewBox="0 0 5 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#464A61" />
                    <circle cx="2.5" cy="9.5" r="2.5" transform="rotate(90 2.5 9.5)" fill="#464A61" />
                    <circle cx="2.5" cy="16.5" r="2.5" transform="rotate(90 2.5 16.5)" fill="#464A61" />
                  </svg>


                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </td>

          </tr>




        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div class="modal fade  modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
      tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

      <div class="modal-dialog" style="margin-top: calc(100vh / 2 );transform: translateY(-50%);">
        <div class="modal-content add-admin-modal ">

          <div class="modal-body d-flex flex-wrap justify-content-between ">


            <input type="text" placeholder="Name" class="admin-register">

            <span style="width: 45%;position: relative ">
              <input type="text" placeholder="Roles" class="admin-register w-100">
              <button style="position: absolute;right: 20px; top: 50%;transform: translateY(-20px);">

                <svg style="width: 1rem ;height: 1.6rem;" viewBox="0 0 10 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.444191 13.5481L6.33637 7.99284L0.444191 2.43759C-0.148064 1.8792 -0.148064 0.977182 0.444191 0.418794C1.03645 -0.139595 1.99317 -0.139595 2.58542 0.418793L9.55581 6.9906C10.1481 7.54899 10.1481 8.45101 9.55581 9.0094L2.58542 15.5812C1.99317 16.1396 1.03645 16.1396 0.444191 15.5812C-0.132878 15.0228 -0.148064 14.1065 0.444191 13.5481Z"
                    fill="#464A61" />
                </svg>
              </button>
            </span>

            <input type="text" placeholder="Email" class="admin-register">

            <span style="width: 45%;position: relative ">
              <input type="text" placeholder="Password" class="admin-register w-100">
              <button style="position: absolute;right: 20px; top: 50%;transform: translateY(-20px);">

                <svg style="width: 2.4rem ;height: 2.4rem;" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.27273 2.18182C2.9834 2.18182 2.70592 2.29675 2.50134 2.50134C2.29675 2.70592 2.18182 2.9834 2.18182 3.27273V13.0909C2.18182 13.3802 2.29675 13.6577 2.50134 13.8623C2.70592 14.0669 2.9834 14.1818 3.27273 14.1818H4.36364C4.96613 14.1818 5.45455 14.6702 5.45455 15.2727C5.45455 15.8752 4.96613 16.3636 4.36364 16.3636H3.27273C2.40475 16.3636 1.57231 16.0188 0.95856 15.4051C0.344804 14.7913 0 13.9589 0 13.0909V3.27273C0 2.40475 0.344804 1.57232 0.95856 0.95856C1.57232 0.344804 2.40475 0 3.27273 0H13.0909C13.9589 0 14.7913 0.344804 15.4051 0.95856C16.0188 1.57231 16.3636 2.40475 16.3636 3.27273V4.36364C16.3636 4.96613 15.8752 5.45455 15.2727 5.45455C14.6702 5.45455 14.1818 4.96613 14.1818 4.36364V3.27273C14.1818 2.9834 14.0669 2.70592 13.8623 2.50134C13.6577 2.29675 13.3802 2.18182 13.0909 2.18182H3.27273ZM10.9091 9.81818C10.3066 9.81818 9.81818 10.3066 9.81818 10.9091V20.7273C9.81818 21.3298 10.3066 21.8182 10.9091 21.8182H20.7273C21.3298 21.8182 21.8182 21.3298 21.8182 20.7273V10.9091C21.8182 10.3066 21.3298 9.81818 20.7273 9.81818H10.9091ZM7.63636 10.9091C7.63636 9.10161 9.10161 7.63636 10.9091 7.63636H20.7273C22.5348 7.63636 24 9.10161 24 10.9091V20.7273C24 22.5348 22.5348 24 20.7273 24H10.9091C9.10161 24 7.63636 22.5348 7.63636 20.7273V10.9091Z"
                    fill="#464A61" />
                </svg>
              </button>
            </span>

            <input type="text" placeholder="Upload image" class="admin-register" style="width: 100% !important;">




          </div>
          <div class="modal-footer " style="border: none;">
            <button type="button" class="modal-add-btn  mx-auto" data-bs-dismiss="modal">Add</button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
import BoxRow from "@/components/page-component/payment/BoxData/BoxRow.vue";

</script>


<style lang="scss" scoped>
.dropdown-toggle {
  &::after {
    display: none;
  }
}
</style>
