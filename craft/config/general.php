<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

// $_ENV constants are loaded by craft-multi-environment from .env.php via public/index.php
return array(

    // All environments
    '*' => array(
        'omitScriptNameInUrls' => true,
        'usePathInfo' => true,
        'cacheDuration' => false,
        'useEmailAsUsername' => true,
        'generateTransformsBeforePageLoad' => true,
        'siteUrl' => getenv('CRAFTENV_SITE_URL'),
        'craftEnv' => CRAFT_ENVIRONMENT,
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
        'imageDriver' => 'imagick',
        // Set the environmental variables
        'environmentVariables' => array(
            'baseUrl'  => getenv('CRAFTENV_BASE_URL'),
            'basePath' => getenv('CRAFTENV_BASE_PATH'),
        ),
        'overridePhpSessionLocation' => false,
    ),

    // Live (production) environment
    'live'  => array(
        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowAutoUpdates' => false,
    ),

    // Staging (pre-production) environment
    'staging'  => array(
        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowAutoUpdates' => false,
    ),

    // Local (development) environment
    'local'  => array(
        'devMode' => true,
        'disableDevmodeMinifying' => true,
        'enableTemplateCaching' => false,
        'allowAutoUpdates' => true,
        'environmentVariables' => array(
          'baseUrl' => 'http://leah.dev',
        )
    ),
);
