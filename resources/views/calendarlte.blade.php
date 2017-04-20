@extends('adminlte::page')

@section('htmlheader_title')
	Exemple calendari
@endsection


@section('main-content')
	<div class="container-fluid spark-screen">
		<multiselect v-model="value" :options="options">
	</div>
@endsection
