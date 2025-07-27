
  $(function () {
    // Toggle search
    $('#searchToggle').on('click', function (e) {
      e.preventDefault();
      $('#searchBarContainer').slideToggle();
    });

    // Desktop search
    $('#desk-searchToggle').on('click', function (e) {
      e.preventDefault();
      $('#searchBarContainer').slideToggle();
    });

    // Accordion toggle
    $('.mobile-accordion-menu').on('click', '.accordion-toggle', function () {
        const $toggle = $(this);
        const $content = $toggle.next('.accordion-content');

        if ($content.length) {
          const isOpen = $toggle.hasClass('open');

          // Close all siblings at same level
          $toggle.parent().children('.accordion-toggle').removeClass('open');
          $toggle.parent().children('.accordion-content').slideUp();

          // Toggle current
          if (!isOpen) {
            $toggle.addClass('open');
            $content.stop(true, true).slideDown();
          }
        }
      });


    // Prevent closing dropdown
    $('.dropdown-menu').on('click', function (e) {
      e.stopPropagation();
    });

    // Desktop submenu switching logic on hover
function isDesktop() {
  return window.innerWidth >= 768;
}

$('.nav-item.dropdown').hover(
  function () {
    if (!isDesktop()) return;
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show').attr('aria-expanded', 'true');
    $(this).find('.nav-link').addClass('active'); // Optional: highlight the link
  },
  function () {
    if (!isDesktop()) return;
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show').attr('aria-expanded', 'false');
    $(this).find('.nav-link').removeClass('active');
  }
);


// Desktop hover for Level 1 (Switchgears, Motors, etc.)
$('.menu-column:first-child .submenu-item').on('mouseenter', function () {
  if (!isDesktop()) return;

  const targetId = $(this).data('target');

  // Activate current
  $('.menu-column:first-child .submenu-item').removeClass('active');
  $(this).addClass('active');

  // Show related level 2
  $('.level2-content').removeClass('active');
  $(targetId).addClass('active');

  // Auto-select first level 2 child
  const $firstL2 = $(targetId).find('.submenu-item').first();
  if ($firstL2.length) {
    $firstL2.trigger('mouseenter');
  }
});

// Desktop hover for Level 2
$('.menu-column:nth-child(2) .submenu-item').on('mouseenter', function () {
  if (!isDesktop()) return;

  const targetId = $(this).data('target');

  $('.menu-column:nth-child(2) .submenu-item').removeClass('active');
  $(this).addClass('active');

  $('.level3-content').removeClass('active');
  $(targetId).addClass('active');
});


// Add an arrow icon if it has nested menu
$('.menu-column:first-child .submenu-item').each(function () {
  const targetId = $(this).data('target');
  if ($(targetId).length && $(targetId).hasClass('level2-content')) {
    $(this).addClass('has-submenu').append('<i class="fas fa-chevron-right ml-auto"></i>');
  }
});

$('.menu-column:nth-child(2) .submenu-item').each(function () {
  const targetId = $(this).data('target');
  if ($(targetId).length && $(targetId).hasClass('level3-content')) {
    $(this).addClass('has-submenu').append('<i class="fas fa-chevron-right ml-auto"></i>');
  }
});

// Accordian arrow on mobile
function addAccordionArrows() {
  if (window.innerWidth >= 768) return; // skip desktop

  $('.mobile-accordion-menu .accordion-toggle').each(function () {
    const $next = $(this).next();
    if ($next.hasClass('accordion-content')) {
      $(this).addClass('has-content'); // Add helper class
    } else {
      $(this).removeClass('has-content');
    }
  });
}

$(document).ready(function () {
  addAccordionArrows();
  $(window).on('resize', addAccordionArrows); // Recheck on resize
});


// Menu should work as dropdown on mobile
function toggleMobileDropdownAttr() {
  if (window.innerWidth < 768) {
    $('#aboutDropdown, #solutionsDropdown').attr('data-toggle', 'dropdown');
  } else {
    $('#aboutDropdown, #solutionsDropdown').removeAttr('data-toggle');
  }
}

$(document).ready(function () {
  toggleMobileDropdownAttr();
  $(window).on('resize', toggleMobileDropdownAttr);
});

// Single menu hover=======================================
 // Mobile submenu toggle
  $(document).ready(function () {
  // Mobile submenu toggle
  $('.single-dropdown-menu .has-submenu > a').on('click', function (e) {
    if (window.innerWidth >= 768) return;

    e.preventDefault();
    const parentLi = $(this).parent();
    parentLi.toggleClass('open');
    parentLi.siblings().removeClass('open');
  });

  // Desktop: open dropdown on hover
  function isDesktop() {
    return window.innerWidth >= 768;
  }

  $('.nav-item.dropdown').hover(
    function () {
      if (!isDesktop()) return;
      $(this).addClass('show');
      $(this).find('.single-dropdown-menu').first().addClass('show');
    },
    function () {
      if (!isDesktop()) return;
      $(this).removeClass('show');
      $(this).find('.single-dropdown-menu').first().removeClass('show');
    }
  );

  // Reapply hover behavior on window resize
  $(window).on('resize', function () {
    if (!isDesktop()) {
      $('.dropdown').removeClass('show');
      $('.single-dropdown-menu').removeClass('show');
    }
  });

  // Add an arrow icon if it has nested menu
  $('.single-dropdown-menu li.has-submenu > a').each(function () {
    if ($(this).find('i.dropdown-arrow').length === 0) {
      $(this).append(' <i class="fas fa-chevron-right dropdown-arrow float-right"></i>');
    }
  });


  // Add active class on hover on single menu
  // Desktop hover for Level 1 (Switchgears, Motors, etc.)
$('.single-dropdown-menu .has-submenu').on('mouseenter', function () {
  if (!isDesktop()) return;

  const targetId = $(this).data('target');

  // Activate current
  $('.single-dropdown-menu .has-submenu').removeClass('active');
  $(this).addClass('active');

  // Show related level 2
  // $('.level2-content').removeClass('active');
  $(targetId).addClass('active');

  // Auto-select first level 2 child
  const $firstL2 = $(targetId).find('.submenu').first();
  if ($firstL2.length) {
    $firstL2.trigger('mouseenter');
  }
});

function isDesktop() {
  return window.innerWidth >= 768;
}

// Desktop: hover behavior
  $('.single-dropdown-menu .has-submenu').on('mouseenter', function () {
    if (!isDesktop()) return;

    $('.single-dropdown-menu .has-submenu').removeClass('active');
    $(this).addClass('active');

    const targetId = $(this).data('target');
    if (targetId) {
      $(targetId).addClass('active');

      const $firstL2 = $(targetId).find('.submenu').first();
      if ($firstL2.length) {
        $firstL2.trigger('mouseenter');
      }
    }
  }).on('mouseleave', function () {
    if (!isDesktop()) return;

    const $li = $(this);
    setTimeout(function () {
      if (!$li.is(':hover') && !$li.find('.submenu').is(':hover')) {
        $li.removeClass('active');
      }
    }, 10);
  });

  // Remove active on leaving entire menu
  $('.single-dropdown-menu').on('mouseleave', function () {
    if (!isDesktop()) return;
    $('.single-dropdown-menu .has-submenu').removeClass('active');
  });

  // Mobile: click to toggle submenu
  $('.single-dropdown-menu .has-submenu > a').on('click', function (e) {
    if (isDesktop()) return;

    e.preventDefault();
    const $parent = $(this).parent();

    // Close siblings
    $parent.siblings('.has-submenu').removeClass('active').find('.submenu').slideUp(200);

    // Toggle current
    $parent.toggleClass('active');
    $parent.children('.submenu').slideToggle(200);
  });


  // toggle third level menu if ti has a child
// Append arrow only if submenu exists
    $('.thirdlevel-menu-item').each(function () {
      if ($(this).children('.thlev-dropdown-submenu').length) {
        $(this).children('a').append('<i class="fa fa-chevron-down arrow-icon ml-2"></i>');
      }
    });

    // Toggle submenu on click
    $('.thirdlevel-menu-item > a').on('click', function (e) {
      const $item = $(this).parent();
      const $submenu = $item.children('.thlev-dropdown-submenu');

      if ($submenu.length) {
        e.preventDefault();
        $item.toggleClass('active');
        $submenu.slideToggle(100);

        // Optional: Close other open submenus (accordion behavior)
        $item.siblings('.thirdlevel-menu-item').removeClass('active')
          .children('.thlev-dropdown-submenu').slideUp(200);
      }
    });


});

});
