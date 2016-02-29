$( document ).ready(function() { 
	
	var obi_wan = {
				name: 'obi-wan',
				healthpoints : 20,
				attackpower : 5,
				counterattack : 10,
			};  
	
	var maul = {
				name: 'maul',
				healthpoints : 20,
				attackpower : 5,
				counterattack : 10,
			};
	
	var sidious = {
				name: 'sidious',
				healthpoints : 20,
				attackpower : 5,
				counterattack : 10,
			};
	
	var stormtrooper = {
				name: 'stormtrooper',
				healthpoints : 20,
				attackpower : 5,
				counterattack : 10,
			};

	var characters = [obi_wan, maul, sidious, stormtrooper];

	for (i = 0; i < characters.length; i++) {
		$('#'+characters[i].name+'-health-points').text(characters[i].healthpoints);
		$('#'+characters[i].name+'-attack-power').text(characters[i].attackpower);
		$('#'+characters[i].name+'-counter-attack-power').text(characters[i].counterattack);
		
		console.log();
	}


	$('.good, .bad').one('click', function() {
		// debugger;
		var chosen = $(this);
		var indexOfChosen = chosen.data('char'); /// this is the index value of chosen 
		console.log(characters[indexOfChosen]);

		if (chosen.hasClass('good')) {
			// debugger;
			for (i = 0; i < characters.length; i++) {
				$('#'+characters[i].name).removeClass('good');
				$('#'+characters[i].name).addClass('bad');
				// $('.bad').css('clear','both')
				chosen.removeClass('bad');
				chosen.addClass('good player1');
				$('.bad').css('float', 'right');
				chosen.css('float', 'left');
			}
		var button = $('<div class=attack>').text('attack');
		chosen.append(button)


				
		} else if (chosen.hasClass('bad')) {
			for (i = 0; i < characters.length; i++) {
				$('#'+characters[i].name).removeClass('good');
				$('#'+characters[i].name).addClass('bad');
				chosen.removeClass('bad');
				chosen.addClass('good player1');
				$('.good').css('float', 'right');
				chosen.css('float', 'left');
			}
		var button = $('<div class=attack>').text('attack');
		chosen.append(button)
		// button.text('attack');
		}
		// debugger;
		$('.good, .bad').off('click');
		$('.bad').one('click', function(){
		 	opponent = $(this)
		 	opponent.addClass('opponent')
			$('.attack').hover(function(){
			 	$(this).css('background-color', 'yellow').css('color', '#444')
			}, function() {
			 	$(this).css('background-color', '#444').css('color', 'yellow')
			});

			var enemy = $('<div class=enemy>').text('enemy');
			opponent.append(enemy)
			$('.bad').off('click');
		
		});
		
		if (characters[$('.player1').data('char')].healthpoints != 0) {

			$('.attack').on('click', function(){
					// debugger;
					player1Health = $('#'+characters[$('.player1').data('char')].name+'-health-points').text()
					enemyHealth = $('#'+characters[$('.opponent').data('char')].name+'-health-points').text()

					enemyHealth = enemyHealth - characters[$('.player1').data('char')].attackpower;
					$('#'+characters[opponent.data('char')].name+'-health-points').text(enemyHealth);
			});
		};
		

	});
	 
	// && characters[$('.opponent').data('char')].healthpoints != 0

}); // *********************jQuery closing tag do not delete (again)



	
	

	
	// button.text('attack');

	// $('.bad').one('click', function(){
	// 	var opponent = $(this)
	// 	debugger;
		// chosen.css('clear', 'both');
		// opponent.css('clear', 'both');
	
	// });

	 







	// $('.bad').on('click', function(){
	// 	// debugger;
	// 	var chosen = $(this);
	// 	var indexOfChosen = chosen.data('char')
	// 	console.log(characters[indexOfChosen]);
	// 	$(this).css('border-color', 'yellow');
	// });

	




// });



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









