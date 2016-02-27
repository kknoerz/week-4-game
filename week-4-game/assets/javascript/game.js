$( document ).ready(function() {

	var skywalker = {
				name: 'skywalker',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}  
	
	var obi_wan = {
				name: 'obi-wan',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}  

	
	var xwing = {
				name: 'xwing',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}
	
	var maul = {
				name: 'maul',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}
	
	var sidious = {
				name: 'sidious',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}
	
	var stormtrooper = {
				name: 'stormtrooper',
				hp : 20,
				ap : 5,
				ca : 10,
				bt : $('<button>')
			}

	var characters = [skywalker, obi_wan, xwing, maul, sidious, stormtrooper]

	for (i = 0; i < characters.length; i++) {
		$('#'+characters[i].name+'-health-points').text(characters[i].hp)
		$('#'+characters[i].name+'-attack-power').text(characters[i].ap)
		$('#'+characters[i].name+'-counter-attack-power').text(characters[i].ca)
		console.log()
	}



	// $('skywalker-health-points').text(skywalker.ls_hp);
	// $('#skywalker-attack-power').text('attack', ls_ap);	
	// $('#skywalker-attack-power').text(ls_ap);
	// $('#skywalker-counter-attack-power').data('counter-attack', ls_ca);	
	// $('#skywalker-counter-attack-power').text(ls_ca);
	// ls_bt.text('attack');
	// $('#skywalker-stats').append(ls_bt);

	
	// $('#obi-wan-health-points').data('health', ow_hp);	
	// $('#obi-wan-health-points').text(ow_hp);
	// $('#obi-wan-attack-power').data('attack', ow_ap);	
	// $('#obi-wan-attack-power').text(ow_ap);
	// $('#obi-wan-counter-attack-power').data('counter-attack', ow_ca);	
	// $('#obi-wan-counter-attack-power').text(ow_ca);
	// ow_bt.text('attack');
	// $('#obi-wan-stats').append(ow_bt);

	
	// $('#xwing-health-points').data('health', xw_hp);	
	// $('#xwing-health-points').text(xw_hp);
	// $('#xwing-attack-power').data('attack', xw_ap);	
	// $('#xwing-attack-power').text(xw_ap);
	// $('#xwing-counter-attack-power').data('counter-attack', xw_ca);	
	// $('#xwing-counter-attack-power').text(xw_ca);
	// xw_bt.text('attack');
	// $('#xwing-stats').append(xw_bt);

	
	// $('#maul-health-points').data('health', dm_hp);	
	// $('#maul-health-points').text(dm_hp);
	// $('#maul-attack-power').data('attack', dm_ap);	
	// $('#maul-attack-power').text(dm_ap);
	// $('#maul-counter-attack-power').data('counter-attack', dm_ca);	
	// $('#maul-counter-attack-power').text(dm_ca);
	// dm_bt.text('attack');
	// $('#maul-stats').append(dm_bt);

	
	// $('#sidious-health-points').data('health', ds_hp);	
	// $('#sidious-health-points').text(ds_hp);
	// $('#sidious-attack-power').data('attack', ds_ap);	
	// $('#sidious-attack-power').text(ds_ap);
	// $('#sidious-counter-attack-power').data('counter-attack', ds_ca);	
	// $('#sidious-counter-attack-power').text(ds_ca);
	// ds_bt.text('attack');
	// $('#sidious-stats').append(ds_bt);

	
	// $('#stormtrooper-health-points').data('health', st_hp);	
	// $('#stormtrooper-health-points').text(st_hp);
	// $('#stormtrooper-attack-power').data('attack', st_ap);	
	// $('#stormtrooper-attack-power').text(st_ap);
	// $('#stormtrooper-counter-attack-power').data('counter-attack', st_ca);	
	// $('#stormtrooper-counter-attack-power').text(st_ca);
	// st_bt.text('attack');
	// $('#stormtrooper-stats').append(st_bt);

	$('.good').hover(
		function() {
		$(this).css('border-color', 'lightblue') 
	},
		function() {
		$(this).css('border-color', 'blue');
	});

	$('.bad').hover(
		function() {
		$(this).css('border-color', 'darkred') 
	},
		function() {
		$(this).css('border-color', 'red');
	});

	$('.good').on('click', function(){
		debugger;
		var chosen = $(this);
		var option = chosen.data('char')
		console.log(character[option]);
		$(this).css('border-color', 'yellow');
	});

});










