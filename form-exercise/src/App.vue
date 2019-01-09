<template>
    <div class="container">
        <form>
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
                        <label for="email">Email
                            <input type="email" name="email" id="email" class="form-control">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="password">Password
                            <input type="password" name="password" id="password" class="form-control">
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="yes">Yes
                            <input type="radio" name="yes" id="yes" class="form-control">
                        </label>
                        <label for="no">No
                            <input type="radio" name="no" id="no" class="form-control">
                        </label>
                    </div>



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
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: </p>
                        <p>Mail: </p>
                        <p>Password: </p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
</style>
