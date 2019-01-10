<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <h1>The Form
                    <small>Please fill the fields</small>
                    </h1>
                    <hr>
                    <div class="form-group">
                        <label for="firstName">First Name
                            <input type="text" name="firstName" id="firstName" class="form-control"
                            v-model="firstName">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name
                            <input type="text" name="lastName" id="lastName" class="form-control"
                            v-model="lastName">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="email">Email
                            <input type="email" name="email" id="email" class="form-control"
                            v-model="email">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="password">Password
                            <input type="password" name="password" id="password" class="form-control"
                            v-model="password">
                        </label>
                    </div>
                    <div class="form-group">
                        <p><strong>Store in Database?</strong></p>
                        <label for="yes">
                            <input type="radio" value="Yes" name="yes" id="yes" class=""
                            v-model="isStoredInDB">Yes
                        </label>
                    
                        <label for="no">
                            <input type="radio" value="No" name="no" id="no" class=""
                            v-model="isStoredInDB">No
                        </label>
                    </div>

                    <button @click.prevent="isSubmitted = true" class="btn btn-primary">Submit</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: <app-full-name></app-full-name></p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ isStoredInDB }}</p>
                    </div>
                    <div class="panel-footer">
                        <button @click="isSubmitted = false" class="btn btn-danger">Back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';
    export default {
        data(){
            return{
            
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                isStoredInDB: false,
                isSubmitted: false
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
