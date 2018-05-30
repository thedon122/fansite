class UsersController < ApplicationController
    def index
        @user = User.all
    end
    def create
        @users =User.create!(users_params)
    end

    private
    def users_params
        params.require(:user).permit(:name, :birth_year, :gender, :species)
    end
end
