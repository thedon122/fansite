class UsersController < ApplicationController
    def index
        @user = User.all
        render json: @user
    end
    def create
        @user = User.create!(user_params)
    end
    def show
        @user = User.find(params[:id])
        render json: @user
    end
    def update
        @user = User.find(params[:id])
    end
    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: {
      msg: "Successfully Deleted"
    }
    end
    private
    def user_params
        params.require(:user).permit(:name, :username, :password)
    end
end