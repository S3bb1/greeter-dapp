import { OnDestroy } from 'angular-libs';
import { SingletonService, EvanBCCService, EvanDescriptionService, EvanCoreService } from 'angular-core';
/**************************************************************************************************/
/**
 * Utility service for the whole greeterdemo DApp
 */
export declare class greeterdemoService implements OnDestroy {
    bcc: EvanBCCService;
    core: EvanCoreService;
    descriptionService: EvanDescriptionService;
    singleton: SingletonService;
    /**
     * Create a singleton service instance.
     */
    constructor(bcc: EvanBCCService, core: EvanCoreService, descriptionService: EvanDescriptionService, singleton: SingletonService);
    /**
     * Test function to check if service is working.
     */
    testFunction(): void;
}
