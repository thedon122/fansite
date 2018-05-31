class PeopleController < ApplicationController
    def index
        @person = User.find(params[:id]).Person.all
        render json: @person
    end
    def create
        @person = User.find(params[:id]).Person.create!(person_params)
        render json: @person
    end
    def show
        @person = Person.find(params[:id])
        render json: @person
    end
    def update
        @person = Person.find(params[:id])
        @person.update_attributes(person_params)
        render json: @person
    end
    def destroy
        @person = Person.find(params[:id])
        @person.destroy
        render json: {
      msg: "Successfully Deleted"
    }
    end
    private
    def person_params
        params.require(:person).permit(:name, :birth_year, :gender, :species)
    end
end
