import { ChangeDetectorRef, DomSanitizer } from 'angular-libs';
import { AsyncComponent, EvanBCCService, EvanCoreService, EvanDescriptionService, EvanMailboxService, EvanRoutingService } from 'angular-core';
/**************************************************************************************************/
export declare class RootComponent extends AsyncComponent {
    private _DomSanitizer;
    private bcc;
    private core;
    private descriptionService;
    private mailboxService;
    private ref;
    private routingService;
    /**
     * Watch for route changes to update the current router-refs
     */
    private watchRouteChange;
    constructor(_DomSanitizer: DomSanitizer, bcc: EvanBCCService, core: EvanCoreService, descriptionService: EvanDescriptionService, mailboxService: EvanMailboxService, ref: ChangeDetectorRef, routingService: EvanRoutingService);
    /**
     * Initialize the component and wait for evan.network processes to be finished.
     *
     * @return     {Promise<void>}  resolved when done
     */
    _ngOnInit(): Promise<void>;
    /**
     * Remove route watchers
     *
     * @return     {Promise<void>}  resolved when done
     */
    _ngOnDestroy(): Promise<void>;
}
