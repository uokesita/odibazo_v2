require 'rubygems'
require 'sinatra'

helpers do
  def partial(page, options={})
    haml page, options.merge!(:layout => false)
  end
end


get '/' do
  haml :index
end

get '/bio' do
  haml :bio
end

get '/graphic' do
  haml :graphic
end

get '/plastic-arts' do
  haml :plastic_arts
end

get '/arts-direction' do
  haml :arts_direction
end

get '/photography' do
  haml :photography
end

get '/video' do
  haml :video
end
