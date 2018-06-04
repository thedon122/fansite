class PeopleController < ApplicationController
    def index
        @person = User.find(params[:user_id]).people.all
        render json: @person
    end
    def create
        @person = User.find(params[:user_id]).people.create!(person_params)
        render json: @person
    end
    def show
        @person = User.find(params[:user_id]).people.find(params[:id])
        render json: @person
    end
    def update
        @person = User.find(params[:user_id]).people.find(params[:id])
        @person.update_attributes(person_params)
        render json: @person
    end
    def destroy
        @person = User.find(params[:user_id]).people.find(params[:id])
        @person.destroy
        render json: {
      msg: "Successfully Deleted"
    }
    end
    private
    def person_params
        params.require(:people).permit(:name, :birth_year, :gender, :species)
    end
end
